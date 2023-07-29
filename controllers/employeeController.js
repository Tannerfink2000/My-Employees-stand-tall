const Employee = require('../models/employee');

// Validate the employee data before adding to the database
function validateEmployeeData(firstName, lastName, roleId, managerId) {
    if (!firstName || typeof firstName !== 'string' || firstName.trim() === '') {
      throw new Error('Invalid first name. Please provide a valid first name.');
    }
  
    if (!lastName || typeof lastName !== 'string' || lastName.trim() === '') {
      throw new Error('Invalid last name. Please provide a valid last name.');
    }
  
    if (!roleId || isNaN(roleId) || roleId <= 0) {
      throw new Error('Invalid role ID. Please provide a valid role ID.');
    }
  
    if (!managerId || isNaN(managerId) || managerId <= 0) {
      throw new Error('Invalid manager ID. Please provide a valid manager ID.');
    }
  }
  
  // Add a new employee
  exports.addEmployee = (req, res) => {
    try {
      const { firstName, lastName, roleId, managerId } = req.body;
  
      validateEmployeeData(firstName, lastName, roleId, managerId);
  
      // Perform database operation to add the employee
      // ...
  
      res.status(201).json({ message: 'Employee added successfully.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
// Controller method to handle viewing all employees
async function viewAllEmployees(req, res) {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve employees' });
  }
}

// Controller method to handle adding an employee
async function addEmployee(req, res) {
  const { firstName, lastName, roleId, managerId } = req.body;
  try {
    const employee = await Employee.create({ firstName, lastName, RoleId: roleId, managerId });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add employee' });
  }
}

// Controller method to handle updating an employee's role
async function updateEmployeeRole(req, res) {
  const { employeeId, roleId } = req.body;
  try {
    const employee = await Employee.findByPk(employeeId);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    employee.RoleId = roleId;
    await employee.save();
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update employee role' });
  }
}

module.exports = { viewAllEmployees, addEmployee, updateEmployeeRole };
