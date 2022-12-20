const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

    title: {
        type: String,
        reuire: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    productId: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    numberShipped: {
        type: Number,
        require: true,
    },
    orderDate: {
        type: Date,
        default: Date.now(),
    }


}, { timestamps: true });

module.exports = mongoose.model("order", orderSchema);