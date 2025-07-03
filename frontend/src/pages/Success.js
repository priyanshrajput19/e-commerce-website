import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const Success = () => {
  const location = useLocation();
  const { orderId, totalAmount } = location.state || {};

  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <CheckCircleIcon style={{ width: '80px', height: '80px', color: '#10b981', margin: '0 auto' }} />
      </div>
      
      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#10b981' }}>
        Payment Successful!
      </h1>
      
      <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem' }}>
        Thank you for your purchase. Your order has been confirmed.
      </p>
      
      {orderId && (
        <div style={{
          backgroundColor: '#f3f4f6',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          maxWidth: '400px',
          margin: '0 auto 2rem auto'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Order Details
          </h2>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Order ID:</strong> {orderId}
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Total Amount:</strong> ${totalAmount?.toFixed(2)}
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            A confirmation email has been sent to your email address.
          </p>
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/products" style={{
          display: 'inline-block',
          backgroundColor: '#10b981',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.25rem',
          textDecoration: 'none',
          fontWeight: '600'
        }}>
          Continue Shopping
        </Link>
        
        <Link to="/" style={{
          display: 'inline-block',
          backgroundColor: '#374151',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.25rem',
          textDecoration: 'none',
          fontWeight: '600'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success; 