# Note-Taking Application API

## Endpoints:

- ### User Registration:
  - **POST /api/v1/auth/register**
    - Register a new user. The request body should include 'username' and 'password'.

- ### User Login:
  - **POST /api/v1/auth/login**
    - Authenticate a user and return a JWT. The request body should include 'username' and 'password'.

- ### Create a Note:
  - **POST /api/v1/notes/notes**
    - Create a new note. The request body should include 'title' and 'content'.

- ### Retrieve All Notes:
  - **GET /api/v1/notes/notes**
    - Retrieve all the notes for the authenticated user.

- ### Retrieve a Specific Note:
  - **GET /api/v1/notes/notes/:id**
    - Retrieve a specific note by ID.

- ### Update a Note:
  - **PUT /api/v1/notes/notes/:id**
    - Update a specific note by ID. The request body can include 'title' and/or 'content'.

- ### Delete a Note:
  - **DELETE /api/v1/notes/notes/:id**
    - Delete a specific note by ID.


