let myFavoritePlaces: string[] = ["Makka","Madina","Switzerland","Silicon Valley", "Dubai"]

console.log(myFavoritePlaces);

let sortedArray:string[] = [...myFavoritePlaces].sort();

//[...myFavoritePlaces] creates a shallow copy of myFavoritePlaces. This means it copies the references to the elements of myFavoritePlaces, but does not deeply clone the elements themselves.

//shallow copy means, a temporary copy or instantaneous copy.

console.log(sortedArray);

console.log(myFavoritePlaces);

console.log([...myFavoritePlaces]);

let reverseArray:string[] = ([...myFavoritePlaces.reverse()]);
console.log(reverseArray);

let rereverseArray:string[] = (reverseArray.reverse());
console.log(rereverseArray);

myFavoritePlaces.sort();
console.log(myFavoritePlaces);

let reverseAlphabeticArray:string[] = [...sortedArray].reverse();

console.log(reverseAlphabeticArray);

myFavoritePlaces = [...sortedArray].reverse();

console.log(myFavoritePlaces);







