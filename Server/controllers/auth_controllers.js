const User = require("../models/User.model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).send("Hello and Welcome Back to my Page");
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// register logic

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (e) {
    console.error(e);
    res.status(500).json("Internal Server Error");
  }
};

// login logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credential" });
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userid: userExist._id.toString(),
      });
    } else {
      res.status(400).json({ message: "Invalid email and password" });
    }
  } catch (e) {
    res.status(500).json("internal server error");
  }
};

// user authenticate logic to send user data

const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);

    res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
