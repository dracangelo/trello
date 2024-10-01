const Card = require('../models/Card');
const List = require('../models/List');

exports.createCard = async (req, res) => {
  const { listId, name, description, dueDate, labels } = req.body;
  try {
    const card = new Card({ name, description, dueDate, labels });
    await card.save();
    await List.findByIdAndUpdate(listId, { $push: { cards: card } });
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCard = async (req, res) => {
  const { cardId } = req.params;
  try {
    await Card.findByIdAndDelete(cardId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
