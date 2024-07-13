"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function car(manufacturer, modelName, ...options) {
    // Create the car object with required properties
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Add the additional properties to the car object
    options.forEach(([key, value]) => {
        carInfo[key] = value;
    });
    return carInfo;
}
let myCar = car("Honda", "Civic", ["make", 2019], ["color", "white"], ["doors", 4], ["Capacity", 4], ["Engine", 1300]);
let myCar2 = car("Toyota", "Corolla", ["make", 2020], ["color", "blue"], ["sunroof", true]);
console.log(myCar);
console.log(myCar2);
