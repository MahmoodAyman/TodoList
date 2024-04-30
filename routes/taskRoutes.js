const express = require('express');

const router = express.Router();
const taskController = require('../controllers/taskController');

router.route('/tasks')
.get(taskController.getTasks)
.post(taskController.createTask);

router.route('/tasks/:id')
    .get(taskController.getTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);
module.exports = router;