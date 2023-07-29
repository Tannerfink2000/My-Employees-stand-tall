const readline = require('readline');
const departmentRoutes = require('./routes/departmentRoutes');
const roleRoutes = require('./routes/roleRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the menu and prompt for user input
function displayMenu() {
  console.log('========== MENU ==========');
  console.log('1. View all departments');
  console.log('2. View all roles');
  console.log('3. View all employees');
  console.log('4. Add a department');
  console.log('5. Add a role');
  console.log('6. Add an employee');
  console.log('7. Update an employee role');
  console.log('8. Exit');
  console.log('==========================');

  rl.question('Enter your choice: ', (choice) => {
    handleUserChoice(choice);
  });
}

// Handle the user's choice
function handleUserChoice(choice) {
  switch (choice) {
    case '1':
      departmentRoutes.viewAllDepartments({}, { json: console.log });
      break;
    case '2':
      roleRoutes.viewAllRoles({}, { json: console.log });
      break;
    case '3':
      employeeRoutes.viewAllEmployees({}, { json: console.log });
      break;
    case '4':
      promptAddDepartment();
      break;
    case '5':
      promptAddRole();
      break;
    case '6':
      promptAddEmployee();
      break;
    case '7':
      promptUpdateEmployeeRole();
      break;
    case '8':
      rl.close();
      process.exit(0);
      break;
    default:
      console.log('Invalid choice. Please try again.');
      displayMenu();
  }
}

// Prompt for adding a department
function promptAddDepartment() {
  rl.question('Enter the name of the department: ', (name) => {
    departmentRoutes.addDepartment({ body: { name } }, { json: console.log });
    displayMenu();
  });
}

// Prompt for adding a role
function promptAddRole() {
  rl.question('Enter the title of the role: ', (title) => {
    rl.question('Enter the salary for the role: ', (salary) => {
      rl.question('Enter the department ID for the role: ', (departmentId) => {
        roleRoutes.addRole({ body: { title, salary, departmentId } }, { json: console.log });
        displayMenu();
      });
    });
  });
}

// Prompt for adding an employee
function promptAddEmployee() {
  rl.question('Enter the first name of the employee: ', (firstName) => {
    rl.question('Enter the last name of the employee: ', (lastName) => {
      rl.question('Enter the role ID for the employee: ', (roleId) => {
        rl.question('Enter the manager ID for the employee: ', (managerId) => {
          employeeRoutes.addEmployee({ body: { firstName, lastName, roleId, managerId } }, { json: console.log });
          displayMenu();
        });
      });
    });
  });
}

// Prompt for updating an employee's role
function promptUpdateEmployeeRole() {
  rl.question('Enter the employee ID to update: ', (employeeId) => {
    rl.question('Enter the new role ID: ', (roleId) => {
      employeeRoutes.updateEmployeeRole({ body: { employeeId, roleId } }, { json: console.log
});
displayMenu();
});
});
}

// Start the application
function startApp() {
console.log('Welcome to the Employee Management System!');
displayMenu();
}

// Call the startApp function to begin the application
startApp();