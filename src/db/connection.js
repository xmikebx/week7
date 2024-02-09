const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection working");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;

// export variable (connection) to be used in other component (server.js)
