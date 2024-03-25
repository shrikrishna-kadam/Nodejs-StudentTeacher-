const Student = require('../models/Student');

const studentController = {
    // CRUD operations for students

    // Create a new student
    createStudent: async (req, res) => {
        try {
            const { name, age, grade } = req.body;
            const student = new Student({ name, age, grade });
            await student.save();
            res.json({ success: true, message: 'Student created successfully', data: student });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Retrieve all students
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.find();
            res.json({ success: true, data: students });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Retrieve a single student by ID
    getStudentById: async (req, res) => {
        try {
            const student = await Student.findById(req.params.id);
            if (!student) {
                return res.status(404).json({ success: false, message: 'Student not found' });
            }
            res.json({ success: true, data: student });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Update a student by ID
    updateStudent: async (req, res) => {
        try {
            const { name, age, grade } = req.body;
            const student = await Student.findByIdAndUpdate(req.params.id, { name, age, grade }, { new: true });
            if (!student) {
                return res.status(404).json({ success: false, message: 'Student not found' });
            }
            res.json({ success: true, message: 'Student updated successfully', data: student });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Delete a student by ID
    deleteStudent: async (req, res) => {
        try {
            const student = await Student.findByIdAndDelete(req.params.id);
            if (!student) {
                return res.status(404).json({ success: false, message: 'Student not found' });
            }
            res.json({ success: true, message: 'Student deleted successfully', data: student });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Retrieve students by grade
    getStudentsByGrade: async (req, res) => {
        try {
            const { grade } = req.query;
            const students = await Student.find({ grade });
            res.json({ success: true, data: students });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Update students by grade
    updateStudentsByGrade: async (req, res) => {
        try {
            const { grade } = req.query;
            const { name, age } = req.body;
            const updatedStudents = await Student.updateMany({ grade }, { name, age });
            res.json({ success: true, message: 'Students updated successfully', data: updatedStudents });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Delete students by grade
    deleteStudentsByGrade: async (req, res) => {
        try {
            const { grade } = req.query;
            const deletedStudents = await Student.deleteMany({ grade });
            res.json({ success: true, message: 'Students deleted successfully', data: deletedStudents });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};

module.exports = studentController;
