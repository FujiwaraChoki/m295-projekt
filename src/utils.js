const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const root = path.dirname(require.main.filename);

const getParentDirName = (filePath) => {
    return path.dirname(filePath);
};

const updateFile = (tasks) => {
    // Write the updated list of tasks to the tasks.json file
    fs.writeFileSync(getParentDirName(root) + '/data/tasks.json', JSON.stringify(tasks));

    return;
};

const addTask = (tasks, task) => {
    // Add the task to the list of tasks
    tasks.push(task);
    updateFile(tasks);

    return tasks;
};

const deleteTask = (tasks, id) => {
    // Filter out the task with the given ID
    const updatedTasks = tasks.filter(task => task.id !== id);
    updateFile(updatedTasks);

    return updatedTasks;
}

const updateTask = (tasks, id, updatedTask) => {
    // Find the task with the given ID and replace it with the updated task
    const task = getTaskById(tasks, id);
    const newTask = {
        id: id,
        title: updatedTask.title,
        description: updatedTask.description,
        due_date: updatedTask.due_date,
        creation_date: task.creation_date
    }

    const updatedTasks = deleteTask(tasks, id);
    updatedTasks.push(newTask);

    updateFile(updatedTasks);

    return newTask;
};

const getTaskById = (tasks, id) => {
    // Find the task with the given ID
    return tasks.find(task => task.id === id);
};

const generateRandomId = () => {
    // Generate a random task ID
    return uuid.v4();
};

module.exports = {
    addTask,
    deleteTask,
    updateTask,
    getTaskById,
    generateRandomId
};