"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "mike";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(toTitleCase(personName));
let heroName = "mike tyson";
function toTitleCase2(str) {
    return str.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
}
console.log(toTitleCase2(heroName));
//The split(' ') method splits the string into an array of words, using spaces as the delimiter.
//For example, "mike tyson" becomes ["mike", "tyson"].
//.map(word =>
//The map function creates a new array by applying the provided function to each element of the array.
//Here, each word in the array ["mike", "tyson"] will be processed individually.
//.join(' ');
//The join(' ') method joins the array of words back into a single string, with spaces in between each word.
//For example, ["Mike", "Tyson"].join(' ') results in "Mike Tyson".
// . operator is used to chain method calls together, allowing you to perform a sequence of operations on the result of the previous method call. Each method call modifies or processes the data and passes it to the next method in the chain.
