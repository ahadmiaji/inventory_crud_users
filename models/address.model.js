const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    yourName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("address", addressSchema);