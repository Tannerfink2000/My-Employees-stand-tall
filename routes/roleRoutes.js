const express = require('express');
const roleController = require('../controllers/roleController');

const router = express.Router();

// Route to view all roles
router.get('/roles', roleController.viewAllRoles);

// Route to add a role
router.post('/roles', roleController.addRole);

module.exports = router;
