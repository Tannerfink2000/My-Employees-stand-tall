const { DataTypes } = require('sequelize');
const sequelize = require('../services/database').sequelize;
const Department = require('./department');

const Role = sequelize.define('Role', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

// Define the relationship between Role and Department
Role.belongsTo(Department);

module.exports = Role;
