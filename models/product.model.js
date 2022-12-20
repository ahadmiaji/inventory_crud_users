const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    reuire: true,
  },
  partNumber: {
    type: Number,
    reuire: true,
  },
  productLabel: {
    type: String,
    require: true,
  },
  startingInventory: {
    type: Number,
    require: true,
  },
  inventoryReceived: {
    type: Number,
    require: true,
  },
  inventoryShipped: {
    type: Number,
    require: true,
  },
  inventoryOnHand: {
    type: Number,
    require: true,
  },
  minimumRequired: {
    type: Number,
    require: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("product", productSchema);