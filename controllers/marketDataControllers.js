const MarketData = require("../models/marketDataModel");
const createMarketData = async (req, res) => {
  try {
    const marketData = new MarketData(req.body);
    await marketData.save();
    res.status(201).json(marketData);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const getAllMarketData = async (req, res) => {
  try {
    const marketData = await MarketData.find();
    if (!marketData) {
      res.status(400).json({error: "No market data found"});
    }
    res.status(201).json(marketData);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const getMarketData = async (req, res) => {
  try {
    const marketData = await MarketData.findById(req.params.id);
    if (!marketData) {
      res.status(400).json({error: "No market data found"});
    }
    res.status(201).json(marketData);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
module.exports = {
  createMarketData,
  getAllMarketData,
  getMarketData,
};
