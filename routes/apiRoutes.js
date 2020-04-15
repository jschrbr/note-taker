var db = require("../db/db");
var uniqid = require("uniqid");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });
  app.post("/api/notes", function (req, res) {
    console.log(req.body, uniqid());
    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   tableData.length = 0;
  //   waitListData.length = 0;
  //   res.json({ ok: true });
  // });
};
