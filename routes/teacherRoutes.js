const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Routes for teacher management
router.post('/', teacherController.createTeacher);        // Route for creating a new teacher
router.get('/', teacherController.getAllTeachers);         // Route for retrieving all teachers
router.get('/:id', teacherController.getTeacherById);      // Route for retrieving a single teacher by ID
router.put('/:id', teacherController.updateTeacher);       // Route for updating a teacher by ID
router.delete('/:id', teacherController.deleteTeacher);    // Route for deleting a teacher by ID

module.exports = router;
