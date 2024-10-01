// server/controllers/listController.js
const List = require('../models/List'); // Ensure the model is imported correctly

// Create a new list
const createList = async (req, res) => {
  const { boardId } = req.params;
  const { name } = req.body;

  const newList = new List({ name, boardId });

  try {
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get lists by board ID
const getLists = async (req, res) => {
  const { boardId } = req.params;
  try {
    const lists = await List.find({ boardId });
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a list by ID
const deleteList = async (req, res) => {
  const { listId } = req.params;
  try {
    await List.findByIdAndDelete(listId);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createList, getLists, deleteList };
