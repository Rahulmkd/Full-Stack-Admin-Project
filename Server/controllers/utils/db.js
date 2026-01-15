const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("mongooseDB connected");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDB;
