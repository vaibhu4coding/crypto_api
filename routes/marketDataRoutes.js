const express = require("express");
const router = express.Router();
const {
  createMarketData,
  getAllMarketData,
  getMarketData,
} = require("../controllers/marketDataControllers");
const {authenticateToken} = require("../middleware/authenticationMiddleware");
const {authorize} = require("../middleware/authorizationMiddleware");
router.post(
  "/",
  authenticateToken,
  authorize(["Admin", "Trader"]),
  createMarketData
);
router.get("/", authenticateToken, getAllMarketData);
router.get("/:id", authenticateToken, getMarketData);
module.exports = router;
