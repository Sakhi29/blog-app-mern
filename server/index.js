const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/post.js");
const commentRoute = require("./routes/comment.js");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server running at Port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
