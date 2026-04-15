const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  lecture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture"
  },
  score: Number,
  total: Number
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);