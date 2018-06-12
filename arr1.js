#!/usr/bin/node
var items = [1,3,6,2,99,44];
items.push(55);
items = items.concat([33,4]);
console.log("items: "+items.toString());
console.log("items.pop(): "+items.pop());
console.log("items: " + items);
console.log("items.length: " + items.length);
console.log("items.even: " + items.filter((x) => (x%2==0)));
console.log("items.odd: " + items.filter((x) => (x%2!=0)));
console.log("items.square: " + items.map((x) => (x*x)));
console.log("items.forEach: ");
items.forEach((item) => {console.log(item);});
