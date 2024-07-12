"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "L", message = "I love TypeScript") {
    console.log(`T-shirt size is "${size}"`, "and the message on the back of T-shirt is:", `"${message}"`);
}
make_shirt(undefined, "Keep calm and code");
