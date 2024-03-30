// models/note.model.js
import { DataTypes } from 'sequelize';
import db from './database.js';
import User from './user.model.js';

const Note = db.define('Note', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Note.belongsTo(User);
Note.sync()

export default Note;
