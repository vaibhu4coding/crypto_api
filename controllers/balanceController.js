const Balance = require("../models/balanceModel");
const createBalance = async (req, res) => {
  try {
    const balance = new Balance(req.body);
    if (!balance) {
      res.status(400).json({message: "No balance created"});
    }
    await balance.save();
    res.status(201).json(balance);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const getBalance = async (req, res) => {
  try {
    const balance = Balance.find(req.params.id);
    if (!balance) {
      res.status(400).json({message: "No balance found"});
    }
    res.status(201).json(balance);
  } catch (error) {}
};
const updateBalance = async (req, res) => {
  try {
    const balance = await Balance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!balance) {
      return res.status(404).json({message: "Balance not found"});
    }
    res.status(201).json(balance);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};
const deleteBalance = async (req, res) => {
  try {
    const balance = await Balance.findByIdAndDelete(req.params.id);
    if (!balance) {
      return res.status(404).json({message: "Balance not found"});
    }
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};
module.exports = {createBalance, getBalance, updateBalance, deleteBalance};
