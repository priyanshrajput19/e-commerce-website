const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

module.exports = Product;
// This code defines a Sequelize model for a Product in an e-commerce application.
// It specifies the fields of the Product model, including name, price, image, and description.