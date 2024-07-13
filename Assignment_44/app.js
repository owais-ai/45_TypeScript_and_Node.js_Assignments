"use strict";
// let items: string[] = [];
Object.defineProperty(exports, "__esModule", { value: true });
let addItems = (...item) => {
    // item.push(...item);
    console.log(item);
    console.log(`Following items are being ordered on sandwitch:`);
    item.forEach((element) => {
        console.log(`- ${element}`);
    });
    console.log("\n");
};
addItems("Cheese", "butter", "Capsicum", "origano", "Olives");
addItems("Turkey", "Ham", "Bacon", "Avocado", "Sprouts");
