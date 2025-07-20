const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Support = sequelize.define('Support', {
  message: {
    type: DataTypes.TEXT,
  },
  target: {
    type: DataTypes.ENUM('admin', 'client', 'worker'),
    allowNull: false,
  },
});

module.exports = Support;
