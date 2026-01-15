require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const adminRouter = require("./router/admin-router");
const connectDB = require("./controllers/utils/db");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  Credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", router);

//let's define admin route
app.use("/admin", adminRouter);

connectDB();

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running at: ${PORT}`);
});
