function make_shirt(size:string = "L", message:string ="I love TypeScript"){
    console.log(`T-shirt size is "${size}"`, "and the message on the back of T-shirt is:", `"${message}"`)
    }
    
   // Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("M");

// Create a shirt of any size with a different message
make_shirt("S", "TypeScript is awesome!");

// Create a large shirt with a different message (using default size)
make_shirt(undefined, "Keep Calm and Code");