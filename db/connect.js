const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://rash:1234rash@taskmanager.r5cvgoi.mongodb.net/?appName=TaskManager';

const connectDB = (url) => {
    mongoose.connect(connectionString, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true,
    }).then(() => console.log('MongoDB connected...'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = connectDB;