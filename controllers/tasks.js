const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks, amount: tasks.length});
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

const getTask = asyncWrapper(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true });
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ task, deleted: true });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};

