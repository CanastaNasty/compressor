var fs = require("fs");

Object.keys(data).forEach(function (value) {
  fs.writeFileSync(value, data[value])
});