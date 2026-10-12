const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks, amount: tasks.length});
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ task });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ task });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ task, deleted: true });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};


