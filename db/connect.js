const mongoose = require('mongoose');

const connectDB = (url) => {
    mongoose.connect(url, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true,
    }).then(() => console.log('MongoDB connected...'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = connectDB;