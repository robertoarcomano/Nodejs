#!/usr/bin/node
var fs = require("fs");

var f = `${fs.readFileSync("/etc/hosts", "utf8")}`;
console.log(f);
