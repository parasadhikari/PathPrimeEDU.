const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({


name: {
    type: String,
    required: true
},

email: {
    type: String,
    required: true,
    unique: true
},

password: {
    type: String,
    required: true
},

role: {
    type: String,
    default: "student"
},

approved: {
    type: Boolean,
    default: false
},
status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
}


});

module.exports = mongoose.model(
"User",
userSchema
);
