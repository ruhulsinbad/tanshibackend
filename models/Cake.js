const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Cake name is mandatory"],
  },

  price: {
    type: Number,
    required: [true, "Cake price in Mandatory"],
  },
  tag: {
    type: String,
    required: true,
    unique: [true, "This tag already exist"],
  },
});

const Cake = mongoose.model("cake", cakeSchema);

module.exports = Cake;
