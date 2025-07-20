const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentType: {
    type: DataTypes.STRING,
  },
});

module.exports = Order;
