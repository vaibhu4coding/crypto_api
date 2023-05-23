const mongoose = require("mongoose");
const tradeSchema = new mongoose.Schema({
  trading_pair_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TradingPair",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Trade", tradeSchema);
