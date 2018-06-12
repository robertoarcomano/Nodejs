#!/usr/bin/node
var fs = require("fs");

console.log("exists /etc/hosts: " + fs.existsSync("/etc/hosts"));
console.log("exists /etc/hos3ts: " + fs.existsSync("/etc/hos3ts"));
