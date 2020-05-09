const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const toDoSchema = new Schema ({
    task: { type: String, required: true },
    complete: {Boolean, default: false}
}, { timestamps: true });

//  Create Model from our Schema
const ToDo = mongoose.model('Date', toDoSchema);

// Export Date Model
module.exports = ToDo;