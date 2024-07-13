let magicianName: string[] = ["Donlad", "Harry", "Leacock"];

function show_magicians(): void {
  magicianName.forEach(name => {
    console.log(name);
      });
}

show_magicians();

function makeGreat(): any {
  magicianName = magicianName.map(name => name + "the Great"
  );
};

makeGreat();
show_magicians();
