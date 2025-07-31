# Crud_Api_with_Posgres
This project is a simple and functional RESTful API built using Node.js, Express.js, and PostgreSQL. It allows you to Create, Read, Update, and Delete (CRUD) user records in a PostgreSQL database.

                            Features
Connects to a PostgreSQL database using the pg Node.js client.

Provides the following API endpoints:

POST /post: Add a new user to the database.

GET /fetchdata: Retrieve all users.

GET /fetchdata/:id: Retrieve a user by ID.

PUT /update/:id: Update a user's last name.

DELETE /delete/:id: Delete a user by ID.
                            Project Structure

postgres_crud_opp/
├── node_modules/
├── index.js            # Main server file
├── package.json
└── README.md           # Project documentation (this file)
⚙️ Prerequisites
Node.js (v14+ recommended)

PostgreSQL (Ensure it's running locally or adjust connection configs)

                                    Installation


git clone https://github.com/yourusername/postgres_crud_opp.git
cd postgres_crud_opp
                              Install dependencies

npm install
Set up PostgreSQL

                Create a database called posgredemo and a table called pgdemotable:
CREATE TABLE pgdemotable (
  id INT PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(100)
);
                            Update DB credentials in index.js


const con = new Client({
  host: "localhost",
  user: "postgres",
  port: 1990,
  password: "1990",
  database: "posgredemo"
});
                                        Running the Project
Start the server:


node index.js
Your server should run on http://localhost:5000

                                API Endpoints
1. POST /post
Create a new user.

Request Body (JSON):


{
  "id": 1,
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com"
}
2. GET /fetchdata
Fetch all users.

3. GET /fetchdata/:id
Fetch user by ID.

4. PUT /update/:id
Update user's last name by ID.

Request Body (JSON):


{
  "lastname": "Smith"
}
5. DELETE /delete/:id
Delete a user by ID.
This is a crud rest Api with Postgres database and using postman to test for the crud operation
