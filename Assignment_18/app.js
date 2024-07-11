var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myFavoritePlaces = ["Makka", "Madina", "Switzerland", "Silicon Valley", "Dubai"];
console.log(myFavoritePlaces);
var sortedArray = __spreadArray([], myFavoritePlaces, true).sort();
//[...myFavoritePlaces] creates a shallow copy of myFavoritePlaces. This means it copies the references to the elements of myFavoritePlaces, but does not deeply clone the elements themselves.
//shallow copy means, a temporary copy or instantaneous copy.
console.log(sortedArray);
console.log(myFavoritePlaces);
console.log(__spreadArray([], myFavoritePlaces, true));
var reverseArray = (__spreadArray([], myFavoritePlaces.reverse(), true));
console.log(reverseArray);
var rereverseArray = (reverseArray.reverse());
console.log(rereverseArray);
myFavoritePlaces.sort();
console.log(myFavoritePlaces);
var reverseAlphabeticArray = __spreadArray([], sortedArray, true).reverse();
console.log(reverseAlphabeticArray);
myFavoritePlaces = __spreadArray([], sortedArray, true).reverse();
console.log(myFavoritePlaces);
