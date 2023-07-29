const Role = require('../models/role');

// Validate the role data before adding to the database
function validateRoleData(title, salary, departmentId) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
      throw new Error('Invalid role title. Please provide a valid title.');
    }
  
    if (!salary || isNaN(salary) || salary <= 0) {
      throw new Error('Invalid salary. Please provide a valid salary value.');
    }
  
    if (!departmentId || isNaN(departmentId) || departmentId <= 0) {
      throw new Error('Invalid department ID. Please provide a valid department ID.');
    }
  }
  
  // Add a new role
  exports.addRole = (req, res) => {
    try {
      const { title, salary, departmentId } = req.body;
  
      validateRoleData(title, salary, departmentId);
  
      // Perform database operation to add the role
      // ...
  
      res.status(201).json({ message: 'Role added successfully.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
// Controller method to handle viewing all roles
async function viewAllRoles(req, res) {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve roles' });
  }
}

// Controller method to handle adding a role
async function addRole(req, res) {
  const { title, salary, departmentId } = req.body;
  try {
    const role = await Role.create({ title, salary, DepartmentId: departmentId });
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add role' });
  }
}

module.exports = { viewAllRoles, addRole };
