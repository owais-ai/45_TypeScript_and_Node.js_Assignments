"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicianName = ["Donlad", "Harry", "Leacock"];
function show_magicians() {
    magicianName.forEach(name => {
        console.log(name);
    });
}
show_magicians();
function makeGreat() {
    magicianName = magicianName.map(name => name + "the Great");
}
;
makeGreat();
show_magicians();
