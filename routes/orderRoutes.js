const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrder,
} = require("../controllers/orderController");
const {authenticateToken} = require("../middleware/authenticationMiddleware");
const {authorize} = require("../middleware/authorizationMiddleware");
router.post("/", authenticateToken, authorize(["Admin"]), createOrder);
router.get("/", authenticateToken, getAllOrders);
router.get("/:id", authenticateToken, getOrder);
module.exports = router;
