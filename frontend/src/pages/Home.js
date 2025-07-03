import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ 
        textAlign: 'center', 
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
        borderRadius: '0.5rem',
        marginBottom: '2rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome to Quick Shop
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#9ca3af', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          A simple E-commerce cart with payment integration. Discover amazing products at great prices. Shop the latest trends in technology, fashion, and more.
        </p>
        <Link to="/products" style={{
          display: 'inline-block',
          backgroundColor: '#10b981',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.25rem',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'background-color 0.2s'
        }}>
          Shop Now
        </Link>
      </div>

      {/* Features Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Why Choose Us?</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚚</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Fast Delivery</h3>
            <p style={{ color: '#9ca3af' }}>Free shipping on orders over $50</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Secure Payment</h3>
            <p style={{ color: '#9ca3af' }}>100% secure payment processing</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>↩️</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Easy Returns</h3>
            <p style={{ color: '#9ca3af' }}>30-day return policy</p>
          </div>
        </div>
      </div>

      {/* Featured Products Preview */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Featured Products</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          {[
            { name: "Wireless Headphones", price: "$99.99" },
            { name: "Smartphone", price: "$699.99" },
            { name: "Laptop", price: "$1299.99" },
            { name: "Smart Watch", price: "$199.99" }
          ].map((product, index) => (
            <div key={index} style={{ 
              backgroundColor: '#1f2937', 
              padding: '1rem', 
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#374151', 
                borderRadius: '0.25rem',
                margin: '0 auto 0.5rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af'
              }}>
                📱
              </div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{product.name}</h3>
              <p style={{ color: '#10b981', fontWeight: '600' }}>{product.price}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/products" style={{
            color: '#10b981',
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            View All Products →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 