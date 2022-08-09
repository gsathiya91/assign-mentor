const mentorRouter = require("./Routers/MentorRouter");
const studentRouter = require("./Routers/StudentRouter");

const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;

const mongoose = require("mongoose");

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.on("open", () => console.log("MongoDB Connected successfully"));

app.get("/", (req, res) =>
  res.send(`
<div>
<p>To get all mentor List - https://zen-assign-mentors.herokuapp.com/mentors </p>
<br>
<p>To get all Students List - https://zen-assign-mentors.herokuapp.com/students </p>
<br>
</div>
`)
);

app.use("/mentors", mentorRouter);
app.use("/students", studentRouter);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
