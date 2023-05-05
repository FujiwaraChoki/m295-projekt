// Tasks Routes
const express = require('express');
const {
    addTask,
    deleteTask,
    updateTask,
    getTaskById,
    generateRandomId
} = require('../utils');

const tasks = require('../../data/tasks.json');

const router = express.Router();

// Middleware
router.use(express.json());

router.get('/', (req, res) => {
    if (!req.session.sessionID) {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    return res.status(200).json({
        success: true,
        data: tasks
    });
});

router.get('/:id', (req, res) => {
    if (!req.session.sessionID) {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    const task = getTaskById(tasks, req.params.id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found'
        });
    }

    return res.status(200).json({
        success: true,
        data: task
    });
});

router.post('/', (req, res) => {
    if (!req.session.sessionID) {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    const { title, description, due_date } = req.body;

    if (!title || !description || !due_date) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a title, description and due date'
        });
    }

    const newTask = {
        id: generateRandomId(),
        title: title,
        description: description,
        due_date: due_date,
        creation_date: new Date().toISOString()
    };

    const updatedTasks = addTask(tasks, newTask);

    return res.status(201).json({
        success: true,
        data: updatedTasks
    });
});

router.delete('/:id', (req, res) => {
    if (!req.session.sessionID) {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    const task = getTaskById(tasks, req.params.id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found'
        });
    }

    deleteTask(tasks, req.params.id);

    return res.status(200).json({
        success: true,
        message: `Successfully deleted task with ID ${req.params.id}`,
        task: task
    });
});

router.put('/:id', (req, res) => {
    if (!req.session.sessionID) {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    const task = getTaskById(tasks, req.params.id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found'
        });
    }

    const { title, description, due_date } = req.body;

    if (!title || !description || !due_date) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a title, description and due date'
        });
    }

    const updatedTask = {
        id: req.params.id,
        title: title,
        description: description,
        due_date: due_date
    };

    updateTask(tasks, req.params.id, updatedTask);

    return res.status(200).json({
        success: true,
        data: updatedTask
    });
});

module.exports = router;
