#!/usr/bin/node
const a = [ 1,2,4,8,16,32,64,128 ];
const sum = (a,b) => a + b
const quadratic = (a) => a*a
const range = (item,from,to) => item > from && item < to
var b = a.reduce(sum)
var c = a.map(quadratic)
var d = a.filter( item => range(item,2,20))
var e = a.every( item => item<129);
var f = a.some( item => item<0);

// console.log("Original: " + a)
// console.log("reduce(sum): " + b)
// console.log("map(quadratic): " + c)
// console.log("every(item<129): " + d)
// console.log("some(item<0): " + f)

/*
    var tmpRecord = {}
    this.props.fieldsList.map( (field) => {tmpRecord[field]= ""})
    this.updateRecord(tmpRecord,LABELS.NEW)
*/
const fieldList = ["name","type","year","category","price"];

const arrayToJson = (x,y,index,arr) => {
  const quote = (s="") => "\"" + s + "\"";
  return (index === 1) ? ( "{ " + quote(x) + ": " + quote() + ", ").concat(quote(y)) :
  (index === arr.length-1) ? ( x + ': ' + quote() + ", ").concat(quote(y) + ": " + quote() + " }") :
  ( x + ': ' + quote() + ", ").concat(quote(y));
}

const record = fieldList.reduce( (x,y,index,arr) => arrayToJson(x,y,index,arr) )


console.log("record: " + record)
const recordJSON = JSON.parse(record)
console.log("recordJSON: " + recordJSON)

console.log("fieldList.keys(): " + fieldList.keys())
console.log("Array.from(fieldList): " + Array.from(fieldList))

const initJsonFromArray = fields => {
  const obj = {}
  fields.forEach( field => obj[field] = "" )
  return obj
}

console.log("initNullFromArray: " + JSON.stringify(initNullFromArray(fieldList)))
