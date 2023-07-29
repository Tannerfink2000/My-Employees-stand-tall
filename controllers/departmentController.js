const Department = require('../models/department');

// Validate the department data before adding to the database
function validateDepartmentData(name) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new Error('Invalid department name. Please provide a valid name.');
    }
  }
  
  // Add a new department
  exports.addDepartment = (req, res) => {
    try {
      const { name } = req.body;
  
      validateDepartmentData(name);
  
      // Perform database operation to add the department
      // ...
  
      res.status(201).json({ message: 'Department added successfully.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
// Controller method to handle viewing all departments
async function viewAllDepartments(req, res) {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve departments' });
  }
}

// Controller method to handle adding a department
async function addDepartment(req, res) {
  const { name } = req.body;
  try {
    const department = await Department.create({ name });
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add department' });
  }
}

module.exports = { viewAllDepartments, addDepartment };
