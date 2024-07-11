import inquirer from "inquirer";
let myFavPlaces = [];
let condition = true;
while (condition) {
    const list = await inquirer.prompt([
        {
            name: "places",
            message: "Enter places to add in your list",
            type: "input",
            validate: function (input) {
                if (input.trim() == "") {
                    return "please provide a valid place name";
                }
                {
                    return true;
                }
            }
        },
        {
            name: "confirmation",
            message: "Would you like to add another place",
            type: "confirm"
        }
    ]);
    condition = list.confirmation;
    myFavPlaces.push(list.places);
}
console.log(myFavPlaces);
// import inquirer from "inquirer";
// let condition = true;
// let mylist: string[] = [];
// while (condition) {
//   const answer = await inquirer.prompt([
//     {
//       name: "itemlist",
//       message: "Enter name of item to add",
//       type: "input",
//       validate: function (input) {
//         if (input.trim() == "") {
//           return "Please provide a valid task";
//         }
//         {
//           return true;
//         }
//       },
//     },
//     {
//       name: "confirmation",
//       type: "confirm",
//       message: "would you like to add another item",
//       default: true,
//     },
//   ]);
//   condition = answer.confirmation;
//   mylist.push(answer.itemlist)
// }
// console.log(mylist);
