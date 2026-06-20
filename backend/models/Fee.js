const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
    joinDate: {
        type: Date,
        required: true
    },
    advanceFee: {
        type: Number,
        default: 0
    },
    monthlyStatus: {
        Apr: { type: String, default: "unpaid" },
        May: { type: String, default: "unpaid" },
        Jun: { type: String, default: "unpaid" },
        Jul: { type: String, default: "unpaid" },
        Aug: { type: String, default: "unpaid" },
        Sep: { type: String, default: "unpaid" },
        Oct: { type: String, default: "unpaid" },
        Nov: { type: String, default: "unpaid" },
        Dec: { type: String, default: "unpaid" },
        Jan: { type: String, default: "unpaid" },
        Feb: { type: String, default: "unpaid" },
        Mar: { type: String, default: "unpaid" }
    },
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
    advanceFeeDate: {
        type: Date
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