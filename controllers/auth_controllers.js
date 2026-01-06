// In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concersn and following the MVC (Model-View_Controller) design pattern.

const home = async (req, res) => {
  try {
    res.status(200).send("Hello and Welcome Back to my Page");
  } catch (e) {
    console.log(e);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);

    res.status(200).send({ message: req.body });
  } catch (e) {
    console.log(register);
  }
};

module.exports = { home, register };
