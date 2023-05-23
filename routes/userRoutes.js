const express = require("express");
const {userRegistration, userLogin} = require("../controllers/userControllers");
const {authenticateToken} = require("../middleware/authenticationMiddleware");
const router = express.Router();
router.post("/register", userRegistration);
router.post("/login", userLogin);
module.exports = router;
