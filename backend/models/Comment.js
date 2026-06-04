const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

noticeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notice",
    required: true
},

userName: {
    type: String,
    required: true
},

role: {
    type: String,
    default: "student"
},

message: {
    type: String,
    required: true
},

parentComment: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "Comment",

    default: null

}

}, {

timestamps: true

});

module.exports =
mongoose.model(
"Comment",
commentSchema
);
