// We dont need these when using enums

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small = 1,
  Medium, // enums automatically sets to 2
  Large, // and this to 3!
}

let mySize: Size = Size.Medium;

console.log(mySize);
