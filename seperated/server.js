const express = require("express");
const router = require("./router");

const app = express();
app.use(router);
const port = 5000;
app.listen(port);
