const app = require("./app");
const express = require("express");
const morgan = require("morgan");

app.use(morgan("tiny"))
app.use(express.json())

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});

app.get('/',(req, res) => {
  res.status(200).send({'ping': 'pong'})
})
