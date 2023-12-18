const mongoose = require('mongoose')
const studentSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Please enter a student name']
        },
        age: {
            type: Number,
            required: true,
        },
        gpa: {
            type: Number,
            required: true,
            default: 0
        },
        fullTime:{
            type: Boolean,
            required:true,
        }
    },
    {
        timestamps: true
    }
)

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;