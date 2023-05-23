const Trade = require("../models/TradeModel");
const createTrade = async (req, res) => {
  try {
    const trade = new Trade(req.body);
    await trade.save();
    res.status(201).json(trade);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const getAllTrades = async (req, res) => {
  try {
    const trades = await Trade.find();
    res.status(201).json(trades);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const getTrade = async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (!trade) {
      return res.status(404).json({error: "Trade not found"});
    }
    res.status(201).json(trade);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
module.exports = {createTrade, getAllTrades, getTrade};
