let friends: string[] = ['Rehan', 'Danish', 'Ariz'];

// Tests for equality and inequality with strings
console.log("Is friends[0] == 'Rehan'? I predict True.");
console.log(friends[0] == 'Rehan'); // True

console.log("Is friends[1] != 'Rehan'? I predict True.");
console.log(friends[1] != 'Rehan'); // True

console.log("Is friends[2] == 'Danish'? I predict False.");
console.log(friends[2] == 'Danish'); // False

console.log("Is friends[0] != 'Rehan'? I predict False.");
console.log(friends[0] != 'Rehan'); // False

// Tests using the lower case function
console.log("Is friends[0].toLowerCase() == 'rehan'? I predict True.");
console.log(friends[0].toLowerCase() == 'rehan'); // True

console.log("Is friends[1].toLowerCase() == 'danish'? I predict True.");
console.log(friends[1].toLowerCase() == 'danish'); // True

console.log("Is friends[2].toLowerCase() == 'danish'? I predict False.");
console.log(friends[2].toLowerCase() == 'danish'); // False

console.log("Is friends[0].toLowerCase() != 'rehan'? I predict False.");
console.log(friends[0].toLowerCase() != 'rehan'); // False


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age:number = 25;

console.log("Is age == 25? I predict True.");
console.log(age == 25); // True

console.log("Is age != 30? I predict True.");
console.log(age != 30); // True

console.log("Is age > 20? I predict True.");
console.log(age > 20); // True

console.log("Is age < 30? I predict True.");
console.log(age < 30); // True

console.log("Is age >= 25? I predict True.");
console.log(age >= 25); // True

console.log("Is age <= 20? I predict False.");
console.log(age <= 20); // False

console.log("Is age == 30? I predict False.");
console.log(age == 30); // False

console.log("Is age != 25? I predict False.");
console.log(age != 25); // False

console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

console.log("Is age < 20? I predict False.");
console.log(age < 20); // False

console.log("Is age >= 30? I predict False.");
console.log(age >= 30); // False

console.log("Is age <= 20? I predict False.");
console.log(age <= 20); // False

// Tests using "and" and "or" operators
let isStudent:boolean = true;
let isWorking:boolean = false;

console.log("Is isStudent == true and isWorking == false? I predict True."); 
console.log(isStudent == true && isWorking == false); // True (logical and)

console.log("Is isStudent == true or isWorking == true? I predict True.");
console.log(isStudent == true || isWorking == true); // True  (loical pipe)

console.log("Is isStudent == false and isWorking == false? I predict False.");
console.log(isStudent == false && isWorking == false); // False 

console.log("Is isStudent == false or isWorking == true? I predict False."); 
console.log(isStudent == false || isWorking == true); // False

// Test whether an item is in an array
console.log("Does friends array include 'Rehan'? I predict True.");
console.log(friends.includes('Rehan')); // True

console.log("Does friends array include 'Ali'? I predict False.");
console.log(friends.includes('Ali')); // False

// Test whether an item is not in an array
console.log("Does friends array not include 'Ali'? I predict True.");
console.log(!friends.includes('Ali')); // True

console.log("Does friends array not include 'Rehan'? I predict False.");
console.log(!friends.includes('Rehan')); // False
