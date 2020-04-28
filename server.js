const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7200;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = "mongodb://budget1:bastionBT7@ds219095.mlab.com:19095/heroku_m3d40sjz" || "mongodb:/localhost/workoutTrackerdb";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
