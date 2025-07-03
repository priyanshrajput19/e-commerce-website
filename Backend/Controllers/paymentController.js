const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../Models/Order');
const nodemailer = require('nodemailer');

// Create payment intent
const createPaymentIntent = async (req, res) => {
  try {
    const { amount, customerEmail, customerName, items } = req.body;

    if (!amount || !customerEmail || !customerName || !items) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        customerEmail,
        customerName
      }
    });

    // Create order in database
    const order = await Order.create({
      customerEmail,
      customerName,
      items,
      totalAmount: amount,
      stripePaymentIntentId: paymentIntent.id
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order.id
    });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
};

// Confirm payment
const confirmPayment = async (req, res) => {
  try {
    const { orderId, paymentIntentId } = req.body;

    // Verify payment with Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      // Update order status
      await Order.update(
        {
          status: 'completed',
          paymentStatus: 'succeeded'
        },
        {
          where: { id: orderId }
        }
      );

      // Send confirmation email
      await sendConfirmationEmail(orderId);

      res.json({ success: true, message: 'Payment confirmed successfully' });
    } else {
      // Update order status to failed
      await Order.update(
        {
          status: 'failed',
          paymentStatus: 'failed'
        },
        {
          where: { id: orderId }
        }
      );

      res.status(400).json({ error: 'Payment failed' });
    }
  } catch (error) {
    console.error('Payment confirmation error:', error);
    res.status(500).json({ error: 'Failed to confirm payment' });
  }
};

// Get order details
const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ error: 'Failed to get order' });
  }
};

// Send confirmation email
const sendConfirmationEmail = async (orderId) => {
  try {
    const order = await Order.findByPk(orderId);
    if (!order) return;

    // Create transporter (using mock SMTP for demo)
    const transporter = nodemailer.createTransporter({
      host: 'smtp.mailtrap.io', // Mock SMTP service
      port: 2525,
      auth: {
        user: process.env.SMTP_USER || 'test',
        pass: process.env.SMTP_PASS || 'test'
      }
    });

    const mailOptions = {
      from: 'noreply@quickshop.com',
      to: order.customerEmail,
      subject: 'Order Confirmation - QuickShop',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Thank you for your order!</h2>
          <p>Dear ${order.customerName},</p>
          <p>Your order has been confirmed and payment processed successfully.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Order Details:</h3>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Total Amount:</strong> $${order.totalAmount}</p>
            <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3>Items Ordered:</h3>
            ${order.items.map(item => `
              <div style="border-bottom: 1px solid #e5e7eb; padding: 10px 0;">
                <p><strong>${item.name}</strong></p>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price}</p>
              </div>
            `).join('')}
          </div>
          
          <p>Thank you for shopping with QuickShop!</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent successfully');
  } catch (error) {
    console.error('Email sending error:', error);
  }
};

module.exports = {
  createPaymentIntent,
  confirmPayment,
  getOrder
}; 