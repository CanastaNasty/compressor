var fs = require("fs");
var output = {};

names = fs.readdirSync(".")
names.forEach(function (value) {
  content = fs.readFileSync(value, "utf8");
	output[value] = content;
})

fs.writeFileSync("../Jason.json", JSON.stringify(output, null, 2))