const express = require('express');
const router = express.Router();
const { createPaymentIntent, confirmPayment, getOrder } = require('../Controllers/paymentController');

// Create payment intent
router.post('/create-payment-intent', createPaymentIntent);

// Confirm payment
router.post('/confirm-payment', confirmPayment);

// Get order details
router.get('/order/:orderId', getOrder);

module.exports = router; 