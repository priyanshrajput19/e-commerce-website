import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Products = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample product data - in a real app, this would come from an API
  const sampleProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest smartphone with advanced features",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Laptop",
      description: "Powerful laptop for work and gaming",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Smart Watch",
      description: "Fitness tracking and notifications",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Gaming Console",
      description: "Next-gen gaming console",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Camera",
      description: "Professional DSLR camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "Tablet",
      description: "Portable tablet for entertainment",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      name: "Speaker System",
      description: "Premium audio speaker system",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop"
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '1.5rem', color: '#9ca3af' }}>Loading products...</div>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
        Products ({products.length})
      </h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products; 