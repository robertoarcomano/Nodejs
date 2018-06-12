#!/usr/bin/node
const MAX=10;
var task=0;

squareAsync = function(n,callback) {
  setTimeout(()=> callback(n*n),100*(Math.random()));
}
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Start with: " + numbers);
numbers.forEach((number) => {
  squareAsync(number,(result) => {
    task++;
    console.log("result: " + result + " task: " + task);
    if (task == numbers.length)
      console.log("Real End");
  });
})
console.log("Fake End");
