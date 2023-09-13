const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

mongoose.model("TaskModel", taskSchema)