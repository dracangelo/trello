const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  labels: { type: [String] },
  comments: [{ text: String, date: { type: Date, default: Date.now } }],
});

module.exports = mongoose.model('Card', CardSchema);
