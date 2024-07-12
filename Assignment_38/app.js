"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let describe_city = (city = "Karachi", country = "Pakistan") => {
    console.log(`${city} is in ${country}`);
};
describe_city("Lahore");
describe_city("Islamabad", undefined);
describe_city("Faisalabad");
describe_city("London", "the United Kingdom");
