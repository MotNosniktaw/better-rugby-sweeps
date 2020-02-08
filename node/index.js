const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";
const dbName = "rugby-sweeps";
let db;

MongoClient.connect(url, (err, client) => {
  if (err) return console.log(err);

  db = client.db(dbName);
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`);
});

app.listen(3005, function() {
  console.log("Rugby Sweeps server listening on port 3005");
});

app.get("/", (req, res) => {
  res.send("Here be Rugby Sweeps");
});

app.get("/countries", (req, res) => {
  db.collection("countries")
    .find()
    .toArray(function(err, results) {
      res.send(results);
    });
});
app.post("/countries", (req, res) => {
  console.log(req.body);
  db.collection("countries").insertMany(req.body);
  res.redirect("/");
});

app.get("/matches", (req, res) => {
  db.collection("matches")
    .find()
    .toArray(function(err, results) {
      res.send(results);
    });
});
app.post("/matches", (req, res) => {
  console.log(req.body);
  db.collection("matches").insertMany(req.body);
  res.redirect("/");
});
