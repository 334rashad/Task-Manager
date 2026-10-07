const express = require('express');
const router = express.Router();
const { getAllTasks } = require('../controllers/tasks');

router.get('/', (req, res) => {
    res.send('Get all tasks');
});

router.route('/')
    .get(getAllTasks)
    .post((req, res) => {
        res.send('Create a new task');
    });

module.exports = router;