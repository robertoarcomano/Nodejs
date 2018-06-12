#!/usr/bin/node
var fs = require("fs");

fs.readFile("/etc/hosts",'utf8',(err,data) => {
  console.log("err: " + err);
  console.log("data: " + data);
});

fs.readFile("/etc/ho2sts",'utf8',(err,data) => {
  console.log("err: " + err);
  console.log("data: " + data);
});
