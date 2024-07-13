"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicianName = ["Donlad", "Harry", "Leacock"];
function show_magicians() {
    magicianName.forEach((name) => {
        console.log(name);
    });
}
show_magicians();
console.log("\n"); //to give the line gap
function makeGreat() {
    let magicianName2 = [...magicianName];
    magicianName2 = magicianName2.map((name) => `${name} the Great`);
    magicianName2.forEach((name) => {
        console.log(name);
    });
}
makeGreat();
console.log("\n"); //to give the line gap
show_magicians();
