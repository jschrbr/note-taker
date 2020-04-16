var db = require("../db/db");
var uniqid = require("uniqid");
var fs = require("fs");
var util = require("util");

const writeFile = util.promisify(fs.writeFileSync);

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  app.post("/api/notes", function (req, res) {
    req.body.id = uniqid();
    db.push(req.body);
    writeFile(__dirname + "/../db/db.json", JSON.stringify(db));
    res.json(db);
  });

  app.delete("/api/notes/:id", function (req, res) {
    let id = req.params.id;
    db = db.filter((object) => object.id !== id);
    writeFile(__dirname + "/../db/db.json", JSON.stringify(db));
    res.json(db);
  });
};
