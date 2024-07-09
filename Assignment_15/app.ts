let guestName:string[] = ["Ariz","Rehan","Umer","Asad"]

guestName.forEach(element => {
    console.log(`Hi ${element}, I would like to invite you to dinner party at my place, Kindly be there at 8:30PM. I will be looking forward for you.`)    
});

let newGuestName:string[] = guestName.splice(2,1, "Danish")  // It have replace Umer with Danish from guestsName array.



guestName.forEach(element => {
    console.log(`Hi ${element}, I would like to invite you to dinner party at my place, Kindly be there at 8:30PM. I will be looking forward for you.`)   
}); 


// Inorder to access removed person name in array

console.log(newGuestName)

// to print removed guest name

console.log(newGuestName[0]);
