import dotenv from "dotenv";
import { app } from "./app.js";
import connectDb from "./db/index.js";

dotenv.config({ path: "./.env" });

const Port = process.env.PORT || 3200;

connectDb().then(
  app.listen(Port, () => {
    console.log(`Server is running on Port : http://localhost:${Port}`);
  })
).catch(err => console.log('Database Connection Failed'+err));


