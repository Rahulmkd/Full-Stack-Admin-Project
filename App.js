require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./controllers/utils/db");

app.use(express.json());

app.use("/", router);

connectDB();

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running at: ${PORT}`);
});
