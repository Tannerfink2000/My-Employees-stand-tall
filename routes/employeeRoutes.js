const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

// Route to view all employees
router.get('/employees', employeeController.viewAllEmployees);

// Route to add an employee
router.post('/employees', employeeController.addEmployee);

// Route to update an employee's role
router.put('/employees/:id', employeeController.updateEmployeeRole);

module.exports = router;
