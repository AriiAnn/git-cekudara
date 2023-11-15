const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "nodejsdb",
});

con.connect(function (err) {
  if (err) {
    console.log("Error in Connection");
  } else {
    console.log("Connected");
  }
});

app.get("/hash", (req, res) => {
  bcrypt.hash("123456", 10, (err, hash) => {
    if (err) return res.json({ Error: "Error in hashing password" });
    const values = [hash];
    return res.json({ result: hash });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users Where email = ?";
  con.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });
    if (result.length > 0) {
      bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
        if (err) return res.json({ Error: "password error" });
        if (response) {
          const token = jwt.sign({ role: "admin" }, "jwt-secret-key", { expiresIn: "1d" });
          return res.json({ Status: "Success", Token: token });
        } else {
          return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
      });
    } else {
      return res.json({ Status: "Error", Error: "Wrong Email or Password" });
    }
  });
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
    if (err) return res.json({ Error: "Error in hashing password" });
    const values = [req.body.name, req.body.email, hash];
    con.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Error query" });
      return res.json({ Status: "Success" });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
