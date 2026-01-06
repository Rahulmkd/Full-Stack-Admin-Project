const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth_controllers");


router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);

module.exports = router;
