"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(name, title) {
    let album = {
        artistName: name,
        albumTitle: title,
    };
    return album;
}
let newAlbum = make_album("Khan Baba", "Suroor");
console.log(newAlbum);
console.log(make_album("Afridi", "Janan"));
console.log(make_album("Bhutto", "Janan"));
console.log("\n");
// Adding Optional Parameter for Number of Tracks:
function make_album2(name, title, tracks) {
    let album2 = {
        artistName: name,
        albumTitle: title,
    };
    if (tracks !== undefined) {
        album2.albumTrack = tracks;
    }
    return album2;
}
let newAlbum2 = make_album2("Khan Baba", "Suroor");
console.log(newAlbum2);
console.log(make_album2("Afridi", "Janan"));
console.log(make_album2("Bhutto", "Janan", 15));
