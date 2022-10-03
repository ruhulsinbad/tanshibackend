const mongoose = require("mongoose");

const coffeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Cake name is mandatory"],
  },

  price: {
    type: String,
    required: [true, "Cake price in Mandatory"],
  },

  tag: {
    type: String,
    required: true,
    unique: [true, "This tag already exist"],
  },
});

const Coffe = mongoose.model("coffe", coffeSchema);

module.exports = Coffe;
