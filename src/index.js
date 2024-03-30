import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

const Port = process.env.PORT || 3200;

app.listen(Port, () => {
  console.log(`Server is running on Port : http://localhost:${Port}`);
});
