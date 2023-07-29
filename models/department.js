const { DataTypes } = require('sequelize');
const sequelize = require('../services/database').sequelize; // Import the sequelize instance

const Department = sequelize.define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Department;
