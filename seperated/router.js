const { Router } = require("express");

const router = new Router();

router.get("/hi/:name", (request, response) => {
  const name = request.params.name;
  response.send(
    `Welcome to the homepage, ${name}! This message was made from seperated server and route`
  );
});

module.exports = router;
