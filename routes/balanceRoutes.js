const express = require("express");
const router = express.Router();
const {authenticateToken} = require("../middleware/authenticationMiddleware");
const {authorize} = require("../middleware/authorizationMiddleware");
const {
  createBalance,
  getBalance,
  updateBalance,
  deleteBalance,
} = require("../controllers/balanceController");
router.post("/", authenticateToken, createBalance);
router.get("/:id", authenticateToken, getBalance);
router.put("/:id", authenticateToken, updateBalance);
router.delete("/:id", authenticateToken, deleteBalance);
module.exports = router;
const i = 0;
