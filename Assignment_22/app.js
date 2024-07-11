var numbers = [1, 2, 3, 4, 5];
// Intentionally causing an index out of bounds error
console.log(numbers[10]); // This will cause an error
// Correcting the error by checking the index
var indexToAccess = 3;
if (indexToAccess >= 0 && indexToAccess < numbers.length) {
    console.log(numbers[indexToAccess]);
}
else {
    console.log("Index out of bounds");
}
