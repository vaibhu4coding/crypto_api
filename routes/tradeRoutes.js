const express = require("express");
const {
  createTrade,
  getAllTrades,
  getTrade,
} = require("../controllers/tradeController");
const router = express.Router();
const {authenticateToken} = require("../middleware/authenticationMiddleware");
const {authorize} = require("../middleware/authorizationMiddleware");
router.post(
  "/",
  authenticateToken,
  authorize[("Admin", "Trader")],
  createTrade
);
router.get("/", authenticateToken, getTrade);
router.get("/:id", authenticateToken, getAllTrades);
module.exports = router;
