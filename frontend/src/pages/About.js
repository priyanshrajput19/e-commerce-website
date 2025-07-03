import React from "react";

const About = () => {
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
          About Our Company
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
          We're passionate about bringing you the best products at the most competitive prices.
        </p>
      </div>

      {/* Mission Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Our Mission</h2>
        <div style={{ 
          backgroundColor: '#1f2937', 
          padding: '1.5rem', 
          borderRadius: '0.5rem',
          lineHeight: '1.6'
        }}>
          <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
            At E-Commerce, our mission is to provide customers with a seamless shopping experience 
            that combines convenience, quality, and affordability. We believe that everyone deserves 
            access to premium products without the premium price tag.
          </p>
          <p style={{ color: '#9ca3af' }}>
            Founded in 2024, we've grown from a small startup to a trusted online marketplace, 
            serving thousands of satisfied customers worldwide. Our commitment to excellence 
            drives everything we do.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Our Values</h2>
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
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Customer First</h3>
            <p style={{ color: '#9ca3af' }}>Your satisfaction is our top priority. We go above and beyond to ensure you have the best shopping experience.</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Quality Assured</h3>
            <p style={{ color: '#9ca3af' }}>Every product in our catalog is carefully selected and tested to meet our high quality standards.</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌱</div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Sustainability</h3>
            <p style={{ color: '#9ca3af' }}>We're committed to reducing our environmental impact through eco-friendly practices and packaging.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Our Numbers</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem' 
        }}>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>10K+</div>
            <p style={{ color: '#9ca3af' }}>Happy Customers</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>500+</div>
            <p style={{ color: '#9ca3af' }}>Products</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>50+</div>
            <p style={{ color: '#9ca3af' }}>Countries Served</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>24/7</div>
            <p style={{ color: '#9ca3af' }}>Customer Support</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Our Team</h2>
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
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#374151', 
              borderRadius: '50%',
              margin: '0 auto 1rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              👨‍💼
            </div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>John Smith</h3>
            <p style={{ color: '#10b981', marginBottom: '0.5rem' }}>CEO & Founder</p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>10+ years of e-commerce experience</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#374151', 
              borderRadius: '50%',
              margin: '0 auto 1rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              👩‍💼
            </div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Sarah Johnson</h3>
            <p style={{ color: '#10b981', marginBottom: '0.5rem' }}>Head of Operations</p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Expert in supply chain management</p>
          </div>
          <div style={{ 
            backgroundColor: '#1f2937', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#374151', 
              borderRadius: '50%',
              margin: '0 auto 1rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              👨‍💻
            </div>
            <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Mike Chen</h3>
            <p style={{ color: '#10b981', marginBottom: '0.5rem' }}>CTO</p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Full-stack developer & tech enthusiast</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ 
        backgroundColor: '#1f2937', 
        padding: '1.5rem', 
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Get in Touch</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📧</div>
            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</p>
            <p style={{ color: '#9ca3af' }}>support@ecommerce.com</p>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞</div>
            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Phone</p>
            <p style={{ color: '#9ca3af' }}>+1 (555) 123-4567</p>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Address</p>
            <p style={{ color: '#9ca3af' }}>123 Commerce St, Tech City, TC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 