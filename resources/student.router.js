const { Router } = require('express');

const { createStudent, generateHallTicket, eligibleNames } = require('./student.controller');

const studentRouter = Router();

studentRouter.post('/create',createStudent);
studentRouter.get('/hallticket',generateHallTicket);
studentRouter.get('/eligible',eligibleNames);

module.exports = studentRouter