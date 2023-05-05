const express = require('express');
const { getAll, single, add, remove, update } = require('../controllers/tasksController');

const router = express.Router();

// Middleware
router.use(express.json());

// Endpoint to get all tasks
router.get('/', getAll);

// Endpoint to get a single task
router.get('/:id', single);

// Endpoint to add a task
router.post('/', add);

// Endpoint to delete a task
router.delete('/:id', remove);

// Endpoint to update a task
router.put('/:id', update);

module.exports = router;
