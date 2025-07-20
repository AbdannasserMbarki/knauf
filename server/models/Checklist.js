const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Checklist = sequelize.define('Checklist', {
  completedItems: {
    type: DataTypes.JSON,
  },
});

module.exports = Checklist;
