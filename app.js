const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// Middleware

app.use(express.json());

app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Task Manager App');
});

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
};

start();