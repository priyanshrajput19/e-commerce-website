const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

module.exports = sequelize;
// This code initializes a Sequelize instance for connecting to a MySQL database using environment variables for configuration.
// It imports the Sequelize library and dotenv for environment variable management, then exports the configured Sequelize instance for use in other parts of the application.
// Make sure to install the necessary packages by running:
// npm install sequelize mysql2 dotenv
// Ensure that your .env file contains the following variables:
// DB_NAME, DB_USER, DB_PASS, DB_HOST
// This setup allows for secure and flexible database configuration, making it easy to change connection details without modifying the codebase.        