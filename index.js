const express = require("express");
const app = express();
const port = 3000;

const loggingMiddleware = (req, res, next) => {
  res.setHeader("X-Codaisseur-Time", new Date());

  next();
};
const failRandomlyMiddleware = (req, res, next) => {
  if (Math.random() * 2 >= 1) {
    next();
  } else {
    res.status(500).end();
  }
};

app.use(loggingMiddleware);
app.get("/", failRandomlyMiddleware, (req, res) => res.send("Hello"));
app.get("/foo", (req, res) => res.send("Hello"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
