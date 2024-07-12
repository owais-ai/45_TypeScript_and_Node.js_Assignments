"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let city_country = (city = "Karachi", country = "Pakistan") => {
    return (`"${city}, ${country}"`);
};
console.log(city_country());
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("London", "United Kingdom"));
