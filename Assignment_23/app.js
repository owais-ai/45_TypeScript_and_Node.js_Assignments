"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = 'subaru';
let age = 20;
let city = 'New York';
let isStudent = true;
let friends = ['Rehan', 'Danish', 'Ariz'];
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // True
console.log("Is age < 18? I predict False.");
console.log(age < 18); // False
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York'); // True
console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // False
console.log("Is isStudent == true? I predict True.");
console.log(isStudent == true); // True
console.log("Is isStudent == false? I predict False.");
console.log(isStudent == false); // False
console.log("Does friends array include 'John'? I predict True.");
console.log(friends.includes('Rehan')); // True
console.log("Does friends array include 'Mike'? I predict False.");
console.log(friends.includes('Umer')); // False
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False
console.log("Is age <= 20? I predict True.");
console.log(age <= 20); // True
console.log("Is city != 'New York'? I predict False.");
console.log(city != 'New York'); // False
console.log("Is isStudent != true? I predict False.");
console.log(isStudent != true); // False
console.log("Does friends array not include 'Jane'? I predict False.");
console.log(!friends.includes('Ariz')); // False
