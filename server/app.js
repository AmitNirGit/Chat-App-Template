const express = require("express");

const app = express();

app.use(express.json());

const messages = [];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  messages.push(req.body);
  res.send("sent");
});
module.exports = app;
