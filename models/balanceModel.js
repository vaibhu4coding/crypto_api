const mongoose = require("mongoose");
const balanceSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  available_balance: {
    type: Number,
    required: true,
    default: 0,
  },
  locked_balance: {
    type: Number,
    required: true,
    default: 0,
  },
});
module.exports = mongoose.model("Balance", balanceSchema);
