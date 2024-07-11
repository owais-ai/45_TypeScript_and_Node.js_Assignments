var guestName = ["Ariz", "Rehan", "Umer", "Asad"];
guestName.forEach(function (element) {
    console.log("Hi ".concat(element, ", I would like to invite you to dinner party at my place, Kindly be there at 8:30PM. I will be looking forward for you."));
});
guestName.splice(2, 1, "Danish"); // It have replace Umer with Danish from guestsName array.
guestName.forEach(function (element) {
    console.log("Hi ".concat(element, ", I would like to invite you to dinner party at my place, Kindly be there at 8:30PM. I will be looking forward for you."));
});
guestName.forEach(function (element) {
    console.log("Hi ".concat(element, ", Their is a good news! I found a bigger dining table, there will be more guests awaiting your company."));
});
guestName.unshift("Ali");
console.log(guestName);
var middleIndex = Math.floor(guestName.length / 2);
guestName.splice(middleIndex, 0, "Usama");
console.log(guestName);
guestName.push("Uzair");
console.log(guestName);
guestName.forEach(function (guest) {
    console.log("Hi ".concat(guest, ", I would like to invite you at the dinner at my house on July 12. I will be looking forward to you."));
});
console.log("I am inviting ".concat(guestName.length, " guests in my dinner party."));
