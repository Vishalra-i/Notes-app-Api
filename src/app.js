import cors from "cors";
import express from "express";
import userRouter from "./routes/user.routes.js"

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));


//routes declaration
app.use("/api/v1/users" , userRouter)







//Home Page of API
app.get('/', (req, res) => {
  res.send(`
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      h1 {
        color: #333;
      }
      h2 {
        color: #666;
      }
      h3 {
        color: red;
      }
      p {
        margin-left: 20px;
      }
      span{
        font-weight: bold;
        background-color: grey;
        padding: 4px;
        color: white;
        font-size: 20px;
        margin-right : 2px ;
      }
    </style>
    <h1>Note-Taking Application API</h1>
    <h2>Endpoints:</h2>
    <ul>
      <li>
        <h3>User Registration:</h3>
        <p><span> POST /auth/register </span> - Register a new user. The request body should include 'username' and 'password'.</p>
      </li>
      <li>
        <h3>User Login:</h3>
        <p> <span> POST /auth/login </span> - Authenticate a user and return a JWT. The request body should include 'username' and 'password'.</p>
      </li>
      <li>
        <h3>Create a Note:</h3>
        <p> <span> POST /notes </span> - Create a new note. The request body should include 'title' and 'content'.</p>
      </li>
      <li>
        <h3>Retrieve All Notes:</h3>
        <p> <span> GET /notes </span> - Retrieve all the notes for the authenticated user.</p>
      </li>
      <li>
        <h3>Retrieve a Specific Note:</h3>
        <p> <span> GET /notes/:id </span> - Retrieve a specific note by ID.</p>
      </li>
      <li>
        <h3>Update a Note:</h3>
        <p> <span> PUT /notes/:id </span> - Update a specific note by ID. The request body can include 'title' and/or 'content'.</p>
      </li>
      <li>
        <h3>Delete a Note:</h3>
        <p> <span> DELETE /notes/:id </span> - Delete a specific note by ID.</p>
      </li>
    </ul>
  `);
});


export { app };
