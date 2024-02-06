const express = require("express");

const app = express();

app.use("/example", express.static("example"));
app.use("/awsum", express.static("awsum"));
app.use("/mostawsum", express.static("mostawsum"));

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
