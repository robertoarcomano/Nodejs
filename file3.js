#!/usr/bin/node
var fs = require("fs");

console.log(fs.statSync("/etc/hosts").size);
