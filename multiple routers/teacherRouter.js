const { Router } = require("express");

const teacherRouter = new Router();
const teachers = ["Matias, Rein"];
teacherRouter.get("/teachers", (request, response) => {
  response.send(teachers);
});

module.exports = teacherRouter;
