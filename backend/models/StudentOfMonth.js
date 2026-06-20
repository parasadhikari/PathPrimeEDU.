const mongoose = require("mongoose");

const studentOfMonthSchema =
new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    className: {
        type: String,
        required: true
    },

    percentage: {
        type: String,
        required: true
    },

    achievement: {
        type: String,
        required: true
    },

    quote: {
        type: String
    },

    image: {
        type: String,
        required: true
    },

    month: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports =
mongoose.model(
    "StudentOfMonth",
    studentOfMonthSchema
);