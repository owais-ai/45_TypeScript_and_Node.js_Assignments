interface Album {
  artistName: string;
  albumTitle: string;
  albumTracks?: number;
}

function make_album(name: string, title: string): Album {
  let album = {
    artistName: name,
    albumTitle: title,
  };
  return album;
}

let newAlbum: Album = make_album("Khan Baba", "Suroor");
console.log(newAlbum);

console.log(make_album("Afridi", "Janan"));
console.log(make_album("Bhutto", "Janan"));

console.log("\n");

// Adding Optional Parameter for Number of Tracks:

function make_album2(name: string, title: string, tracks?: number): Album {
  let album2: Album = {
    artistName: name,
    albumTitle: title,
  };
  if (tracks !== undefined) {
    album2.albumTrack = tracks;
  }
  return album2;
}

let newAlbum2: Album = make_album2("Khan Baba", "Suroor");
console.log(newAlbum2);

console.log(make_album2("Afridi", "Janan", 3));
console.log(make_album2("Bhutto", "Janan", 5));
