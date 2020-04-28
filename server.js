const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7200;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = "mongodb://budget1:bastionBT7@ds133261.mlab.com:33261/heroku_qkl867v8" || "mongodb:/localhost/budget";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
