const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    category: {
        type: String,
        default: "General"
    },

    author: {
        type: String,
        default: "PathPrimeEdu"
    },

    pinned: {
        type: Boolean,
        default: false
    },

    likes: [{
        type: String
    }]

}, {

    timestamps: true

});

module.exports =
    mongoose.model(
        "Notice",
        noticeSchema
    );