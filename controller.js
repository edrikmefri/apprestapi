"user strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Apliksai REST API ku berjalan!");
};
