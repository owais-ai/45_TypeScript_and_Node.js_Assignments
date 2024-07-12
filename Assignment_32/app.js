"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Adnan", "Admin", "Rehan", "Umer", "Ariz"];
let new_users = ["Danish", "Arsalan", "Rehan", "Umer", "Ariz"];
for (let user of new_users) {
    if (current_users.includes(user)) {
        console.log(`${user} already taken, please chose another username`);
    }
    else {
        console.log(`${user} is available`);
    }
}
