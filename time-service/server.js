const express = require("express");

express()
  .get("/", (req, res) => {
    res.send({ time: new Date().toISOString() });
  })
  .listen(8080, () => {
    console.log("Listening http://localhost:8080");
  });
