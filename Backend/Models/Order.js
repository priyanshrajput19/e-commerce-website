const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  customerEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  items: {
    type: DataTypes.JSON,
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stripePaymentIntentId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending'
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'succeeded', 'failed'),
    defaultValue: 'pending'
  }
}, {
  timestamps: true
});

module.exports = Order; 