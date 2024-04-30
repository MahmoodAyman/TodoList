const express = require('express');
const mongoose = require('mongoose');
const app = express();
const tasksRoute = require('./routes/taskRoutes');

app.use(express.json());

app.use(tasksRoute);
module.exports = app;