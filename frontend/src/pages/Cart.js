import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems = [], onUpdateQuantity, onRemoveItem }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveItem(productId);
    } else {
      onUpdateQuantity(productId, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Your cart is empty</h2>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Add some products to get started!</p>
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
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Shopping Cart</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        {cartItems.map((item) => (
          <div key={item.id} style={{
            backgroundColor: '#1f2937',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#374151',
              borderRadius: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af'
            }}>
              {item.image ? '📱' : 'Image'}
            </div>
            
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{item.name}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{item.description}</p>
              <span style={{ color: '#10b981', fontWeight: '600' }}>${item.price}</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                style={{
                  backgroundColor: '#374151',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.25rem',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}
              >
                -
              </button>
              <span style={{ minWidth: '40px', textAlign: 'center', fontWeight: '600' }}>
                {item.quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                style={{
                  backgroundColor: '#374151',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.25rem',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}
              >
                +
              </button>
            </div>
            
            <div style={{ textAlign: 'right', minWidth: '100px' }}>
              <div style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.5rem' }}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        backgroundColor: '#1f2937',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>Total:</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
            ${calculateTotal().toFixed(2)}
          </span>
        </div>
        <Link to="/checkout" state={{ cartItems, totalAmount: calculateTotal() }} style={{
          display: 'block',
          width: '100%',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '0.25rem',
          padding: '1rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          cursor: 'pointer',
          textDecoration: 'none',
          textAlign: 'center'
        }}>
          Proceed to Checkout
        </Link>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Link to="/products" style={{
          color: '#10b981',
          textDecoration: 'none',
          fontWeight: '600'
        }}>
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart; 