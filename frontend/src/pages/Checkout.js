import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load Stripe (replace with your publishable key)
const stripePromise = loadStripe('pk_test_51RgmhpIxaHqQTm2ogSZlSxnZ6GMM38fY5H3bHG0sN2UKR50lBIHX7Nse638gIb5cB8qmR8oiY79hYbw0l5GlTs1K00GScSMSd5');

const CheckoutForm = ({ cartItems, totalAmount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    if (!customerInfo.name || !customerInfo.email) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Create payment intent
      const { data } = await axios.post('http://localhost:5001/api/payments/create-payment-intent', {
        amount: totalAmount,
        customerEmail: customerInfo.email,
        customerName: customerInfo.name,
        items: cartItems
      });

      // Confirm payment with Stripe
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: customerInfo.name,
              email: customerInfo.email,
            },
          }
        }
      );

      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        // Confirm payment with backend
        await axios.post('http://localhost:5001/api/payments/confirm-payment', {
          orderId: data.orderId,
          paymentIntentId: paymentIntent.id
        });

        onPaymentSuccess(data.orderId);
        navigate('/success', { 
          state: { 
            orderId: data.orderId,
            totalAmount: totalAmount 
          } 
        });
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('Payment failed. Please try again.');
    }

    setLoading(false);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
          Customer Information
        </h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.25rem',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.25rem',
              fontSize: '1rem'
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
          Payment Information
        </h2>
        
        <div style={{
          padding: '1rem',
          border: '1px solid #d1d5db',
          borderRadius: '0.25rem',
          backgroundColor: '#f9fafb'
        }}>
          <CardElement options={cardElementOptions} />
        </div>
        
        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
          Test card: 4242 4242 4242 4242
        </p>
      </div>

      {error && (
        <div style={{
          backgroundColor: '#fef2f2',
          color: '#dc2626',
          padding: '0.75rem',
          borderRadius: '0.25rem',
          marginBottom: '1rem'
        }}>
          {error}
        </div>
      )}

      <div style={{
        backgroundColor: '#1f2937',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>Total Amount:</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
            ${totalAmount.toFixed(2)}
          </span>
        </div>
        
        <button
          type="submit"
          disabled={!stripe || loading}
          style={{
            width: '100%',
            backgroundColor: loading ? '#6b7280' : '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            padding: '1rem',
            fontSize: '1.125rem',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </form>
  );
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = location.state || {};

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  if (!cartItems || cartItems.length === 0) {
    return null;
  }

  const handlePaymentSuccess = (orderId) => {
    // Clear cart or update cart state here
    console.log('Payment successful for order:', orderId);
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>
        Checkout
      </h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
          Order Summary
        </h2>
        {cartItems.map((item) => (
          <div key={item.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 0',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <div>
              <span style={{ fontWeight: '500' }}>{item.name}</span>
              <span style={{ color: '#6b7280', marginLeft: '0.5rem' }}>
                x{item.quantity}
              </span>
            </div>
            <span style={{ fontWeight: '600' }}>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm
          cartItems={cartItems}
          totalAmount={totalAmount}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </Elements>
    </div>
  );
};

export default Checkout; 