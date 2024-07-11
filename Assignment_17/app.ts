let guestName: string[] = ["Ariz", "Rehan", "Umer", "Asad"]

guestName.forEach(element => {
    console.log(`Hi ${element}, I would like to invite you to dinner party at my place, Kindly be there at 8:30PM. I will be looking forward for you.`)
});

guestName.splice(2, 1, "Danish")  // It have replace Umer with Danish from guestsName array.



guestName.forEach(element => {
    console.log(`Hi ${element}, I would like to invite you to dinner party at my place, Kindly be there at 8:30PM. I will be looking forward for you.`)
});

guestName.forEach(element => {
    console.log(`Hi ${element}, Their is a good news! I found a bigger dining table, there will be more guests awaiting your company.`)
});

guestName.unshift("Ali");

console.log(guestName);

let middleIndex = Math.floor(guestName.length / 2);

guestName.splice(middleIndex, 0, "Usama")

console.log(guestName);

guestName.push("Uzair")

console.log(guestName);

guestName.forEach(guest => {
    console.log(`Hi ${guest}, I would like to invite you at the dinner at my house on July 12. I will be looking forward to you.`);
})

console.log("sorry! I can only invite two people for dinner");

let guestQuantity: number = guestName.length - 2;

let guestRemoved: string[] = [];

for (let i = 1; i <= guestQuantity; i++) {
    let removedGuest = guestName.pop();
    if (removedGuest !== undefined) {
        guestRemoved.push(removedGuest);
    }
}
// if(removedGuest !== undefined) is used to make sure the the pop() function will not return undefined, incase it got no element to remove from guestName array.

console.log(guestRemoved);

guestRemoved.forEach(element => {
    console.log(`Sorry ${element}, I can't invite you on dinner becuase of due to some inavoidable issue with the dinning table that I had ordered for you.`);

});
console.log(guestName);

guestName.forEach(element => {
    console.log(`Hi ${element}, I have a good news for you. You are still invited for the dinner at my house. I will be waiting for you`);
});

for (let i = 1; i <= 2; i++){
    guestName.pop();
}


console.log(guestName);


