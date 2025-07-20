const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Maintenance = sequelize.define('Maintenance', {
  machine: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('In progress', 'Fixed', 'Waiting'),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Maintenance;
