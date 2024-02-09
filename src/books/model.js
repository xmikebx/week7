const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
    unique: true,
  },

  author: {
    type: "string",
  },

  genre: {
    type: "string",
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
