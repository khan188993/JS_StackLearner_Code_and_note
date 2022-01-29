//! JavaScript Array Methods and Properties

// concat()	Joins two or more arrays, and returns a copy of the joined arrays
// array1.concat(array2, array3, ..., arrayX)
console.log("........concat........");
const concat1 = ["Cecilie", "Lone"];
const concat2 = ["Emil", "Tobias", "Linus"];
console.log(concat1.concat(concat2, [2, 3, 4])); //concat kore new array return krbe
console.log([...concat1, ...concat2]); //spread oparator diye(array,object,set + krte pari)
console.log([...concat1, ...concat2, ...[3434, 34]]);

// copyWithin()	Copies array elements within the array, to and from specified positions
//? array.copyWithin(target, start, end)
console.log("........copyWithin........");
const copyWithin = ["arfan", "shuvo", "fahim", "adnan", "shanto"];

var result = copyWithin.copyWithin(1, 1, 2);
console.log(result);

// entries()	Returns a key/value pair Array Iteration Object

// every()	Checks if every element in an array pass a test
/* Definition and Usage
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array */
// syntex : array.every(function(currentValue, index, arr), thisValue)
console.log("........every........");
const every = [32, 33, 16, 40];
var result = every.every((v) => {
  return v > 2;
});
console.log(result);

// fill()	Fill the elements in an array with a static value
console.log("........fill........");
const fill = [32, 33, 16, 40];
var result = fill.fill("arfan");
console.log(result);

// filter()	Creates a new array with every element in an array that pass a test
console.log("........filter........");
const filter = [32, 33, 16, 40];
var result = filter.filter((v, index, arr) => {
  // return arr.length>4;
  return v > 30; //16 bad jabe sob false hoile empty array
});
console.log(result);

// find()	Returns the value of the first element in an array that pass a test
console.log("........find........");
const find = [32, 33, 16, 40];
var result = find.find((v, index, arr) => {
  // return arr.length>4;
  return v > 30; //1st j value pabe tai single value return krbe
});
console.log(result);
// findIndex()	Returns the index of the first element in an array that pass a test
console.log("........findIndex........");
const findIndex = [32, 33, 16, 40];
var result = findIndex.findIndex((v, index, arr) => {
  // return arr.length>4;
  return v > 30; //1st j value pabe tai single value return krbe index k
});
console.log(result);

// forEach()	Calls a function for each array element
console.log("........forEach........");
const forEach = [32, 33, 16, 40];
let sum = 0;
var result = forEach.forEach((v, index, arr) => {
  // console.log(v); //eita return kre na kno kichu just iterate kore
  sum = sum + v;
});
console.log(sum);

// from()	Creates an array from an object,string
console.log("........from........");
const from1 = "Arfan Khan";
const from2 = { name: "arfan", phone: 23432 };
console.log(Array.from(from1));
console.log(Array.from(from2));
// includes()	Check if an array contains the specified element true
console.log("........includes........");
const includes = [32, 33, 16, 40];
console.log(includes.includes(16));
console.log(includes.includes(10));

// indexOf()	Search the array for an element and returns its position
console.log("........indexOf........");
const indexOf = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
console.log(indexOf.indexOf("arfan"));
console.log(indexOf.indexOf("arfan", 1)); // .indexOf(searchElement, fromIndex)
console.log(indexOf.indexOf(0));

// isArray()	Checks whether an object is an array
console.log("........isArray........");
const isArray = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
console.log(Array.isArray(isArray));

// join()	Joins all elements of an array into a string
console.log("........join........");
const join = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
console.log(join.join("|")); //join krbe ki diye
console.log(join.toString());

// keys()	Returns a Array Iteration Object, containing the keys of the original array
console.log("........keys........");
const keys = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
// console.log(keys.keys());
for (let v of keys.keys()) {
  console.log(v); //array keys gulo iterable object e convert krbe
}

// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
console.log("........lastIndexOf........");
const lastIndexOf = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
console.log(lastIndexOf.lastIndexOf("arfan", 1));
console.log(lastIndexOf.lastIndexOf("arfan"));
console.log(lastIndexOf.indexOf("arfan"));

// map()	Creates a new array with the result of calling a function for each array element
console.log("........map........");
const map = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
var Result = map.map((v) => {
  return `${v} Khan`;
});
console.log(Result);
//map function ta foreach er moto kaj korate pari

// pop()	Removes the last element of an array, and returns that element
console.log("........pop........"); //eita array modified kre dei
const pop = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
var popValue = pop.pop();
console.log(popValue, pop);

// push()	Adds new elements to the end of an array, and returns the new length
console.log("........push........"); //eita array modified kre dei
const push = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
console.log(push.push(3334)); //push korbe and tar index ta retur krbe
console.log(push);

// reduce()	Reduce the values of an array to a single value (going left-to-right)

// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
console.log("........reverse........"); //new Array return kre
const reverse = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
console.log(reverse.reverse());

// shift()	Removes the first element of an array, and returns that element
console.log("........shift........"); //eita array modified kre dei
const shift = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
var shiftValue = shift.shift();
console.log(shiftValue, shift); //1st value ber krbe

// slice()	Selects a part of an array, and returns the new array
console.log("........slice........"); // modified kore na
const slice = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
var result1 = slice.slice(); //copy Array default 0 e kop, last e kop dei
var result = slice.slice(1, 3); //copy Array  1 e kop, 3 e kop

console.log(slice, result, result1);

// some()	Checks if any of the elements in an array pass a test

console.log("........some........");
const some = [32, 33, 16, 40];
var result = some.some((v) => {
  return v > 100; // sob false hole false
  return v > 10; //true or er moto kaj kre
});
console.log(result);

// sort()	Sorts the elements of an array
console.log("........sort........");
const sort = [32, 33, 16, 40, 100]; //array modified kre dei
console.log(sort.sort());

// Sort numbers in ascending order:
console.log(
  sort.sort(function (a, b) {
    return a - b;
  })
);

// Sort numbers in Desendent order:
console.log(
  sort.sort(function (a, b) {
    return b - a;
  })
);

// splice()	Adds/Removes elements from an array
console.log("........splice........"); // modified kore dei
const splice = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
var result = splice.splice(0, 1); //copy Array  0(bahir) e kop, 1 e kop

console.log(splice, result);

// toString()	Converts an array to a string, and returns the result
console.log("........toString........"); // modified kore na
const toString = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
console.log(toString.toString());

// unshift()	Adds new elements to the beginning of an array, and returns the new length
console.log("........unshift........"); //eita array modified kre dei
const unshift = ["arfan", "shuvo", "arfan", "fahim", "shanto"];
//.unshift(value) korbe and tar index ta return krbe
console.log(unshift);

// valueOf()	Returns the primitive value of an array
console.log("........valueOf........");
const valueOf = ["Banana", "Orange", "Apple", "Mango"];
console.log(valueOf.valueOf());

//?Array Properties
// constructor	Returns the function that created the Array object's prototype
console.log("........constructor........");
const constructor = ["Banana", "Orange", "Apple", "Mango"];
console.log(constructor.constructor);
// length	Sets or returns the number of elements in an array
console.log("........length........");
const length = ["Banana", "Orange", "Apple", "Mango"];
console.log(length.length);

// prototype	Allows you to add properties and methods to an Array object
console.log("........prototype........");

Array.prototype.myUcase = function () {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
    newArray.push(this[i]);
  }
  return newArray; //for undefined avoid
};
const upperPrototype = ["Banana", "Orange", "Apple", "Mango"];
console.log(upperPrototype.myUcase());
