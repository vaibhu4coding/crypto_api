const TradingPair = require("../models/tradingPairModel");
const createTradingPair = async (req, res) => {
  try {
    const {name, baseCurrency, quoteCurrency} = req.body;
    const existingTradingPair = await TradingPair.findOne({name});
    if (existingTradingPair) {
      return res.status(400).json({message: "Trading pair already exists..."});
    }
    const tradingPair = new TradingPair({name, baseCurrency, quoteCurrency});
    await tradingPair.save();
    res.status(201).json(tradingPair);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const getAllTradingPair = async (req, res) => {
  try {
    const tradingPairs = await TradingPair.find();
    res.status(201).json(tradingPairs);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
const getTradingPair = async (req, res) => {
  try {
    const tradingPair = await TradingPair.findById(req.params.id);
    if (!tradingPair) {
      return res.status(404).json({error: "Trading pair not found..."});
    }
    res.status(200).json(tradingPair);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
var i = 0;
i++;
i++;
module.exports = {getAllTradingPair, createTradingPair, getTradingPair};
