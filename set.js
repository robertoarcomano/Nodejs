#!/usr/bin/node

const s = new Set(["a", "b", "c", "a"])
s.forEach(item => console.log(item))
const iterator = s.values()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
