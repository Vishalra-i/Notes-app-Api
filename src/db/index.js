import { Sequelize } from "sequelize";
import db from "../models/database.js";





const connectDb =  async() => {
    try {
    await db.authenticate();
    console.log('Connection has been established successfully.' );
  } catch (error) {
    console.log('Unable to connect to the database:', error);
}}

export default connectDb