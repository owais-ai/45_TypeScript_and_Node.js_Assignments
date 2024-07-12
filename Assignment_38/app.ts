let describe_city= (city:string = "Karachi", country:string = "Pakistan") =>{
console.log(`${city} is in ${country}`)
}

describe_city("Lahore",);
describe_city("Islamabad", undefined);
describe_city("Faisalabad",);
describe_city("London", "the United Kingdom");
