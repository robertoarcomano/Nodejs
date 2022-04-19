#!/usr/bin/node

// 1. Define array size
const size = 10

// 2. Define array
const array =
	new Array(10)
	.fill(1)
	.map( (item,index) => item = index )

// 3. Define some functions
const sum = (a,b) => a + b
const fact = (a,b) => (a == 0 ? 1 : a) * (b == 0 ? 1 : b)
const quadratic = (a) => a * a
const double = (a) => 2 * a
const range = (item, from, to) => item > from && item < to

// 4.
const arraySum = array.reduce(sum)
const arrayFact = array.reduce(fact)
const arrayQuadratic = array.map(quadratic)
const arrayRangeFilter = array.filter( item => range(item,2,20))
const arrayEvery = array.every( item => item < 129);
const arraySome = array.some( item => item < 0);

// 5. Basic Tests
console.log("array: " + array)
console.log("arraySum: " + arraySum)
console.log("arrayFact: " + arrayFact)
console.log("arrayQuadratic: " + arrayQuadratic)
console.log("arrayRangeFilter (2,20): " + arrayRangeFilter)
console.log("arrayEvery (<129): " + arrayEvery)
console.log("arraySome (<0): " + arraySome)

const arrayDoubleQuadratic = array.map(quadratic).map(double)

// 6. Complex Tests
console.log("arrayDoubleQuadratic: " + arrayDoubleQuadratic)
