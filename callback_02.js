const path = require("path");
const fs = require("fs");

const address = path.join(__dirname, "data.txt");

const callback = (_, data) => console.log(data.toString());

fs.readFile(address, {}, callback);
