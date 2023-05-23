const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  trading_pair_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TradingPair",
    required: true,
  },
  type: {
    type: String,
    enum: ["buy", "sell"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["open", "filled", "cancelled"],
    default: "open",
  },
});
module.exports = mongoose.model("Order", orderSchema);
