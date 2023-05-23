const express = require("express");
const {
  createTradingPair,
  getAllTradingPair,
  getTradingPair,
} = require("../controllers/tradingPairControllers");
const {authenticateToken} = require("../middleware/authenticationMiddleware");
const {authorize} = require("../middleware/authorizationMiddleware");
const router = express.Router();
router.post(
  "/",
  authenticateToken,
  authorize(["Admin", "Trader"]),
  createTradingPair
);
router.get("/", getAllTradingPair);
router.get("/:id", getTradingPair);
module.exports = router;
