const mongoose = require("mongoose");

const billSchame = new mongoose.Schema({
  product1: {
    type: Number,
    required: true,
    default: 0,
  },
  product2: {
    type: Number,
    required: true,
    default: 0,
  },
  product3: {
    type: Number,
    required: true,
    default: 0,
  },
  product4: {
    type: Number,
    required: true,
    default: 0,
  },
  product5: {
    type: Number,
    required: true,
    default: 0,
  },
  product6: {
    type: Number,
    required: true,
    default: 0,
  },
  totalCost: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Bill = mongoose.model("bill", billSchame);
module.exports = Bill;
