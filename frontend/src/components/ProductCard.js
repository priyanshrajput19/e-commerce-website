import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, description, price, image } = product;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {image ? (
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.25rem' }} />
        ) : (
          <span>Image</span>
        )}
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <span className="product-price">${price}</span>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard; 