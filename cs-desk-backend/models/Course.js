const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    pdf: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);