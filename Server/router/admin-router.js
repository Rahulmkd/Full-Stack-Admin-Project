const express = require("express");
const router = express.Router();
const admineController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, admineController.getAllusers);

module.exports = router;
