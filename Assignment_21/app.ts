import { input } from "@inquirer/prompts"
import { log } from "console"
import inquirer from "inquirer"

type car = {
    make: string,
    model: string,
    color: string,
    year: number
}

const details = await inquirer.prompt([
    {
        name: "make",
        message: "Kindly enter make of the car",
        type: "input",
        validate: function (input){
            if(input == ''){
                return "Make cannot be empty"
            }
            return true
        }
        
    },
    {
        name: "model",
        message: "Kindly enter model of the car",
        type: "input",
        validate: function (input){
            if(input == ''){
                return "Model cannot be empty"
            }
            return true
        }
    },
    {
        name: "color",
        message: "Kindly enter color of the car",
        type: "input",
        validate: function (input){
            if(input == ''){
                return "Color cannot be empty"
            }
            return true
        }
    },
    {
        name: "year",
        message: "Kindly enter year of the car",
        type: "input",
        validate: function (input){
            if(input == ''){
                return "Year cannot be empty"
            }
            return true
        }
    }
]);

let myCar:car = {
make: details.make,
model: details.model,
color: details.color,
year: details.year
}

console.log(myCar);
