const { response } = require("express");
const Book = require("./model");

/////add a book/////

const addBook = async (request, response) => {
  try {
    const book = await Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });
    console.log("Book: ", book);
    response.send({ message: "new book created", book: book });
  } catch (error) {
    response.send({ message: "its gone pete tong", error: error });
  }
};

/////get all books/////

const getAllBooks = async (request, response) => {
  try {
    const books = await Book.find({});
    // ({}) returns the full array from Book  aka all books
    console.log("Route: ", request.path);
    response.send({ message: "all the books", books: books });
  } catch (error) {
    response.send({ message: "its gone pete tong", error: error });
  }
};

/////delete a book/////

const deleteBook = async (request, response) => {
  try {
    const book = await Book.findOneAndDelete({
      // deleting a book by the title
      title: request.body.title,
    });
    console.log("book deleted:", book);
    response.send({ message: "book deleted", book: book });
  } catch (error) {
    response.send({ message: "its gone pete tong", error: error });
  }
};

/////update an item/////

const updateItem = async (request, response) => {
  try {
    const book = await Book.findOneAndUpdate(
      //this is using the title of a book
      {
        title: request.body.title,
      },
      //to change the author of that book to the value below
      {
        $set: { author: "Mike" },
      },
      { new: true }
    );
    console.log("book updated:", book);
    response.send({ message: "book updated", book: book });
  } catch (error) {
    response.send({ message: "its gone pete tong", error: error });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  deleteBook: deleteBook,
  updateItem: updateItem,
};

//export the function variables so they can be used in other components
