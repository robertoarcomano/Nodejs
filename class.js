#!/usr/bin/node
var op1 = () => {};
op1.sum = (a,b) => {return a+b};

class op2 {
  static sum(a,b) {
    return a+b
  };
}

console.log(op1.sum(1,2));
console.log(op2.sum(3,4));
