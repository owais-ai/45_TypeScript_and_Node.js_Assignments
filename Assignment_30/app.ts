let userNames: string[] = ["Adnan","Admin", "Rehan", "Umer", "Ariz", "Ali"];

for (let username of userNames) {
  if (username == 'Admin') {
    console.log(`Hello Admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
// It can also be done using for in loop as:

// for (let index in userNames) {
//   let username = userNames[index];
//   if (username === 'Admin') {
//     console.log(`Hello Admin, would you like to see a status report?`);
//   } else {
//     console.log(`Hello ${username}, thank you for logging in again.`);
//   }
// }