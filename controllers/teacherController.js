const Teacher = require('../models/Teacher');

const teacherController = {
    // CRUD operations for teachers

    // Create a new teacher
    createTeacher: async (req, res) => {
        try {
            const { name, subject } = req.body;
            const teacher = new Teacher({ name, subject });
            await teacher.save();
            res.json({ success: true, message: 'Teacher created successfully', data: teacher });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Retrieve all teachers
    getAllTeachers: async (req, res) => {
        try {
            const teachers = await Teacher.find();
            res.json({ success: true, data: teachers });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Retrieve a single teacher by ID
    getTeacherById: async (req, res) => {
        try {
            const teacher = await Teacher.findById(req.params.id);
            if (!teacher) {
                return res.status(404).json({ success: false, message: 'Teacher not found' });
            }
            res.json({ success: true, data: teacher });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Update a teacher by ID
    updateTeacher: async (req, res) => {
        try {
            const { name, subject } = req.body;
            const teacher = await Teacher.findByIdAndUpdate(req.params.id, { name, subject }, { new: true });
            if (!teacher) {
                return res.status(404).json({ success: false, message: 'Teacher not found' });
            }
            res.json({ success: true, message: 'Teacher updated successfully', data: teacher });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Delete a teacher by ID
    deleteTeacher: async (req, res) => {
        try {
            const teacher = await Teacher.findByIdAndDelete(req.params.id);
            if (!teacher) {
                return res.status(404).json({ success: false, message: 'Teacher not found' });
            }
            res.json({ success: true, message: 'Teacher deleted successfully', data: teacher });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};

module.exports = teacherController;
