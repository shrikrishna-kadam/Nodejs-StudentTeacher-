const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Routes for student management
router.post('/', studentController.createStudent); // Create a new student
router.get('/', studentController.getAllStudents); // Retrieve all students
router.get('/:id', studentController.getStudentById); // Retrieve a single student by ID
router.put('/:id', studentController.updateStudent); // Update a student by ID
router.delete('/:id', studentController.deleteStudent); // Delete a student by ID
router.get('/grade', studentController.getStudentsByGrade); // Retrieve students by grade
router.put('/grade', studentController.updateStudentsByGrade); // Update students by grade
router.delete('/grade', studentController.deleteStudentsByGrade); // Delete students by grade

module.exports = router;
