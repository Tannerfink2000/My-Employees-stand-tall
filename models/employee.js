const { DataTypes } = require('sequelize');
const sequelize = require('../services/database').sequelize;
const Role = require('./role');

const Employee = sequelize.define('Employee', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define the relationship between Employee and Role
Employee.belongsTo(Role);

// Define the relationship between Employee and Manager (self-referencing)
Employee.belongsTo(Employee, { as: 'manager' });

module.exports = Employee;
