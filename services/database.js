const { Sequelize } = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Sync models with the database
async function syncModels() {
  try {
    // Sync all defined models to the database
    await sequelize.sync({ alter: true });
    console.log('Models synced with the database successfully.');
  } catch (error) {
    console.error('Error syncing models with the database:', error);
  }
}

module.exports = { sequelize, testConnection, syncModels };
