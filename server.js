const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const db = require("./db/queries");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/cats", (req, res) => {
  console.log('received request');
  
  db.getCats((err,results) => {
    res.send(results);
  });
});
app.post("/api/cats", (req, res) => {
  console.log('received request', req.body.name);
  
  db.addCat(req.body.name,(err,results) => {
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});