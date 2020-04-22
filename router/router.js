const { Router } = require('express');
const studentRouter = require('../resources/student.router');

const rootRouter = Router();

rootRouter.use('/student',studentRouter);

module.exports = rootRouter