#!/usr/bin/node

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x);

const sum = (a,b) => a + b
const fact = (a,b) => (a == 0 ? 1 : a) * (b == 0 ? 1 : b)
const quadratic = (a) => a * a
const double = (a) => 2 * a
const range = (item, from, to) => item > from && item < to

const c = pipe(
	quadratic,
	double
)

console.log(c(3))