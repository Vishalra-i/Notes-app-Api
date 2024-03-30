import { Sequelize } from "sequelize";

const sequelize = new Sequelize("notesapp" ,"root" ,"Visana@12@" ,{
    host: 'localhost',
    dialect:'mysql'
});

const connectDb =  async() => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.' );
  } catch (error) {
    console.log('Unable to connect to the database:', error);
}}

export default connectDb