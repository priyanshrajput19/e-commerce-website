import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const navLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.1rem',
  padding: '0.25rem 0.75rem',
  borderRadius: '0.25rem',
  transition: 'background 0.2s',
};

const Header = ({ cartItemCount = 0 }) => (
  <header className="header">
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1>Quick Shop</h1>
    </Link>
    <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Link to="/" style={navLinkStyle}>Home</Link>
      <Link to="/about" style={navLinkStyle}>About</Link>
      <Link to="/cart" className="cart-icon" style={navLinkStyle}>
        <FaShoppingCart size={22} color="#fff" style={{ verticalAlign: 'middle' }} />
        {cartItemCount > 0 && (
          <span className="cart-badge">
            {cartItemCount > 99 ? '99+' : cartItemCount}
          </span>
        )}
      </Link>
      <Link to="/login" style={navLinkStyle}>
        <FaUser size={20} color="#fff" style={{ verticalAlign: 'middle' }} />
      </Link>
    </nav>
  </header>
);

export default Header; 