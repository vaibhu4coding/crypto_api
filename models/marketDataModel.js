const mongoose = require("mongoose");
const marketDataSchema = new mongoose.Schema({
  trading_pair_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TradingPair",
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  last_price: {
    type: Number,
    required: true,
  },
  traing_volume: {
    type: Number,
    required: true,
  },
  bid_price: {
    type: Number,
    required: true,
  },
  ask_price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("MarketData", marketDataSchema);
