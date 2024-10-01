const Board = require('../models/Board');

const createBoard = async (req, res) => {
  const { name } = req.body;
  try {
    const board = new Board({ name });
    await board.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBoard = async (req, res) => {
  const { id } = req.params;
  try {
    await Board.findByIdAndDelete(id);
    res.status(200).json({ message: 'Board deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createBoard, getBoards, deleteBoard };
