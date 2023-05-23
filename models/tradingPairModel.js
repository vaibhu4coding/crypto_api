const mongoose = require("mongoose");
const tradingPairSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  baseCurrency: {
    type: String,
    required: true,
  },
  quoteCurrency: {
    type: String,
    required: true,
  },
});
const i = 0;
module.exports = mongoose.model("TradingPair", tradingPairSchema);
