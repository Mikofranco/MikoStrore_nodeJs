const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./router/user");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db connection successful"))
  .catch((err) => console.log(err));

app.use("/api/user", userRouter);

app.listen(5000, () => {
  console.log("backend server is running");
});
