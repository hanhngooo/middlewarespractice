const { Router } = require("express");

const studentRouter = new Router();
const students = ["Hanh"];
studentRouter.get("/student", (request, response) => {
  response.send(students);
});

module.exports = studentRouter;
