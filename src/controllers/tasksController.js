const {
    addTask,
    deleteTask,
    updateTask,
    getTaskById,
    generateRandomId
} = require('../utils');

const tasks = require('../../data/tasks.json');

const getAll = (req, res) => {
    try {
        if (!req.session.email) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        return res.status(200).json({
            success: true,
            data: tasks
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const single = (req, res) => {
    try {
        if (!req.session.email) {
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
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const add = (req, res) => {
    try {
        if (!req.session.email) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        const { title, description, due_date } = req.body;

        if (title === '') {
            return res.status(406).json({
                success: false,
                message: 'Please provide a title.'
            });
        }

        if (!description || !due_date) {
            return res.status(406).json({
                success: false,
                message: 'Please provide a description and a due date.'
            });
        }

        const newTask = {
            id: generateRandomId(),
            title: title,
            description: description,
            due_date: due_date,
            creation_date: new Date().toISOString()
        };

        addTask(tasks, newTask);

        return res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const remove = (req, res) => {
    try {
        if (!req.session.email) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        const task = getTaskById(tasks, req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: `Task with ID ${req.params.id} was not found.`
            });
        }

        deleteTask(tasks, req.params.id);

        return res.status(200).json({
            success: true,
            message: `Successfully deleted task with ID ${req.params.id}.`,
            task: task
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const update = (req, res) => {
    try {
        if (!req.session.email) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        const task = getTaskById(tasks, req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: `Task with ID ${req.params.id} was not found.`
            });
        }

        const { title, description, due_date, status } = req.body;

        if (title === '') {
            return res.status(406).json({
                success: false,
                message: 'Please provide a title.'
            });
        }

        if (!description || !due_date || !status) {
            return res.status(406).json({
                success: false,
                message: 'Please provide a description, status and a due date.'
            });
        }

        const updatedTask = {
            id: req.params.id,
            title: title,
            description: description,
            due_date: due_date,
            status: status
        };

        updateTask(tasks, req.params.id, updatedTask);

        return res.status(200).json({
            success: true,
            data: updatedTask
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

module.exports = {
    getAll,
    single,
    add,
    remove,
    update
};