import cors from "cors";
import express from "express";
import userRouter from "./routes/user.routes.js";
import notesRouter from "./routes/notes.routes.js";
import cookieParser from "cookie-parser";

const app = express();

// Enable CORS
app.use(cors());

// Use cookie-parser middleware
app.use(cookieParser());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Routes declaration
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/notes", notesRouter);

// Home Page of API
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
        <p><span> POST /api/v1/auth/register </span> - Register a new user. The request body should include 'username' and 'password'.</p>
      </li>
      <li>
        <h3>User Login:</h3>
        <p> <span> POST /api/v1/auth/login </span> - Authenticate a user and return a JWT. The request body should include 'username' and 'password'.</p>
      </li>
      <li>
        <h3>Create a Note:</h3>
        <p> <span> POST /api/v1/notes/notes </span> - Create a new note. The request body should include 'title' and 'content'.</p>
      </li>
      <li>
        <h3>Retrieve All Notes:</h3>
        <p> <span> GET /api/v1/notes/notes </span> - Retrieve all the notes for the authenticated user.</p>
      </li>
      <li>
        <h3>Retrieve a Specific Note:</h3>
        <p> <span> GET /api/v1/notes/notes/:id </span> - Retrieve a specific note by ID.</p>
      </li>
      <li>
        <h3>Update a Note:</h3>
        <p> <span> PUT /api/v1/notes/notes/:id </span> - Update a specific note by ID. The request body can include 'title' and/or 'content'.</p>
      </li>
      <li>
        <h3>Delete a Note:</h3>
        <p> <span> DELETE /api/v1/notes/notes/:id </span> - Delete a specific note by ID.</p>
      </li>
    </ul>
  `);
});

export { app };
