const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    productId: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    productReceived: {
        type: Number,
        require: true,
    },
    purchaseDate: {
        type: Date,
        default: Date.now(),
    }
}, { timestamps: true });

module.exports = mongoose.model("purchase", purchaseSchema);