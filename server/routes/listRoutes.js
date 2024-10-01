const express = require('express');
const {
  createList,
  getLists,
  deleteList,
} = require('../controllers/listController'); // Adjust path as necessary
const router = express.Router();

// Route to create a new list for a specific board
router.post('/:boardId', createList);

// Route to get all lists for a specific board
router.get('/:boardId', getLists);

// Route to delete a specific list by ID
router.delete('/:boardId/:listId', deleteList);

module.exports = router;
