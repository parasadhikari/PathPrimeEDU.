const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({

    studentName: {
        type: String,
        required: true
    },

    parentName: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    selectedCourse: {
        type: String,
        required: true
    },

    courseType: {
        type: String,
        required: true
    }

}, {

    timestamps: true

});

module.exports = mongoose.model(
    "Admission",
    admissionSchema
);