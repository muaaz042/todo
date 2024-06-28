const mongoose = require("mongoose");
const connectionString = process.env.DATABASE_URL;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB connection is established");
  })
  .catch((err) => console.error("connection error: " + err));
