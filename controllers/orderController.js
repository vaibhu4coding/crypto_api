const Order = require("../models/OrderModel");
const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const getAllOrders = async (req, res) => {
  try {
    const order = await Order.find();
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({error: "Order not found"});
    }
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
module.exports = {createOrder, getAllOrders, getOrder};
