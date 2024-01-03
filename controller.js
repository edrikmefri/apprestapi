"user strict";

var response = require("./rest");
var connection = require("./koneksi");

exports.index = function (req, rest) {
  response.ok("Apliksai REST API ku berjalan!");
};
