let city_country= (city:string = "Karachi", country:string = "Pakistan") =>{
    return (`"${city}, ${country}"`);
}

console.log(city_country());
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("London", "United Kingdom"));