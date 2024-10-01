const express = require('express');
const { createCard, deleteCard } = require('../controllers/cardController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createCard);
router.delete('/:cardId', authMiddleware, deleteCard);

module.exports = router;
