const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

// Middleware

app.use(express.json());

app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Task Manager App');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});