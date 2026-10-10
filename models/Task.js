const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Task name is required'],
		trim: true,
        maxlength: [30, 'Task name cannot exceed 30 characters']
	},
	completed: {
		type: Boolean,
		default: false,
	},
	priority: {
		type: String,
		enum: ['high', 'medium', 'low'],
		default: 'medium',
	},
});

module.exports = mongoose.model('Task', TaskSchema);
