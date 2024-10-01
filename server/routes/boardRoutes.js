const express = require('express');
const { createBoard, getBoards, deleteBoard } = require('../controllers/boardController');
const router = express.Router();

router.post('/create', createBoard);
router.get('/', getBoards);
router.delete('/:id', deleteBoard);

module.exports = router;
