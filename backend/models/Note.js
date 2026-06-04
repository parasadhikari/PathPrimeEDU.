const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({

title: {
    type: String,
    required: true
},

subject: {
    type: String,
    required: true
},

className: {
    type: String,
    required: true
},

pdf: {
    type: String,
    required: true
},

type: {
    type: String,
    default: "note"
}

}, {

timestamps: true

});

module.exports = mongoose.model(
"Note",
noteSchema
);
