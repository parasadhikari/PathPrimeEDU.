const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({

    studentName: {
        type: String,
        required: true
    },

    className: {
        type: String,
        required: true
    },

    phone: {
        type: String
    },

    monthlyFee: {
        type: Number,
        required: true
    },

    advanceFee: {
        type: Number,
        default: 0
    },

    totalPaid: {
        type: Number,
        default: 0
    },

    pendingAmount: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        default: "Pending"
    },

    paymentHistory: [

        {
            amount: Number,

            month: String,

            paymentDate: {
                type: Date,
                default: Date.now
            }
        }

    ]

}, {
    timestamps: true
});

module.exports =
    mongoose.model("Fee", feeSchema);