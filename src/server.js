const express = require("express");

const app = express();

// HTTP Verbs - GET, POST, PUT, DELETE

// const response = await fetch("http://someaddress.com"); // sends GET request

// HTTP Verb GET

const fakeArr = [];

app.use(express.json());

app.get("/books", (request, response) => {
  console.log("/books: ", request.path);
  response.send({ message: "success", fakeArr: fakeArr });
});

app.get("/books/getfirstbook", (request, response) => {
  // get te first book
  console.log("/books/books: ", request.path);
  const book = fakeArr[0];
  response.send({ message: "success", book: book });
  console.log(book);
});

app.post("/books", (request, response) => {
  console.log("title: ", request.body.title);
  console.log("genre: ", request.body.genre);
  console.log("author: ", request.body.author);

  fakeArr.push(request.body);

  let awesome;
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.body.title) {
      awesome = "it's awsome";
    }
  }
  console.log(awesome);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

app.put("/books", (request, response) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // change (update) the author to an new name
  let findTitle;
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.query.title) {
      findTitle = "Title Found!!!";
    } else {
      findTitle = "Title not found!!!";
    }
  }
  // console.log(findTitle);
  response.send({ message: { findTitle } });
});

app.delete("/books", (request, response) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // remove (delete) the element from the array
  let deleteTitle;
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.query.title) {
      // request.body.title = fakeArr[i].title;
      deleteTitle = "Title found and Deleted!!!";
      const index = fakeArr[i];
      fakeArr.splice(index, 1);
    } else {
      deleteTitle = "Title not found!!!";
    }
  }
  response.send({ message: { deleteTitle } });
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
