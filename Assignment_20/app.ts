import inquirer from "inquirer";

let myFavPlaces: string[] = [];

let condition = true;

while (condition) {
  const list = await inquirer.prompt([
    {
      name: "places",
      message: "Enter places to add in your list",
      type: "input",
      validate: function (input){
        if (input.trim() == ""){
            return "please provide a valid place name" // Return an error message if input is invalid
        }
            return true  // Explicitly return true if the input is valid
        
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

console.log(myFavPlaces)




