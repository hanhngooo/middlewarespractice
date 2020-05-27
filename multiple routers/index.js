const express = require("express");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");
const app = express();
app.use(studentRouter);
app.use(teacherRouter);
const port = 6000;
app.listen(port);
