require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const connection = require("./db/connection"); //creating a variable that links to connection.js
const bookRouter = require("./books/routes"); //creating a variable that links to routes.js

const app = express();

app.use(express.json());

connection(); //this is calling connection.js for the connection information

app.use(bookRouter);

/////CREATE_SCHEMA///// moved to model.js

const logTypeOfResult = async (result) => {
  console.log(`Typeof result: ${typeof result} - result: ${result}`);
};

/////FIND_ALL///// moved to controllers.js

/////FIND_FIRST///// not needed for assignment

// app.get("/books/getfirstbook", async (request, response) => {
//   const book = await Book.findOne();

//   console.log("Route: ", request.path);
//   response.send({ message: "first book found", book: book });
// });

/////CREATE_NEW_BOOK///// moved to controllers.js

/////UPDATE///// moved to controllers.js

/////DELETE///// moved to controllers.js

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
