const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["open", "in-progress", "resolved"], default: "open" },
});

module.exports = mongoose.model("Bug", bugSchema);