const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
});

module.exports = mongoose.model('List', ListSchema);
