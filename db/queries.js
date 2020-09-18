
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstack"
});

connection.connect();

function getCats(cb) {
  connection.query("select name from cats", function (err, results) {
    if(err) {
      cb(err,null);
    }
    cb(null,results);
  })
}

function addCat(catname, cb) {
  connection.query(`insert into cats (name) values (${catname})`, function (err, results) {
    if (err) {
      cb(err, null);
    }
    cb(null, results);
  })
}

module.exports = {
  getCats,
  addCat
}
