import { Sequelize } from 'sequelize';
import db from './database.js'; // Assuming you have a file for database configuration

const User = db.define('User', {
  fullName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true // Ensure email format is valid
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.sync();

export default User;
