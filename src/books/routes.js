const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model"); //Book requires model because model is the structure of the Book, it defines the content

//linking the function variables to controllers for use in bookRouter?

const { addBook } = require("./controllers");
const { getAllBooks } = require("./controllers");
const { deleteBook } = require("./controllers");
const { updateItem } = require("./controllers");

// the routes used for the different functions (thunderclient requests)

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.delete("/books/deleteBook", deleteBook);
bookRouter.put("/books/updateItem", updateItem);
//anatomy of a route

module.exports = bookRouter;

//export variable (bookRouter) to be used in other component (Server.js)
