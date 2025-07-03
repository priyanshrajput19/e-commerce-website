const Product = require('../Models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

module.exports = { getProducts, createProduct };
// This code defines two functions for handling product-related requests in an e-commerce application.
// The `getProducts` function retrieves all products from the database and returns them as a JSON response.
// The `createProduct` function creates a new product based on the request body and returns the created product as a JSON response.
// Both functions handle errors by returning a 500 status code with an error message if something goes wrong.
// These functions are typically used in an Express.js application to manage product data.
// Make sure to import the Product model from the appropriate path, and ensure that the database connection is properly configured in your application.
// You can use these functions in your routes to handle GET and POST requests for products.
// For example, in your routes file, you might have something like this:
// const express = require('express');
// const { getProducts, createProduct } = require('./controllers/productController');
// const router = express.Router();
// router.get('/products', getProducts);
// router.post('/products', createProduct);
// module.exports = router;
// This setup allows you to manage product data in your e-commerce application efficiently.     