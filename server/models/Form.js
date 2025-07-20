const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Form = sequelize.define('Form', {
  formData: {
    type: DataTypes.JSON,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Form;
