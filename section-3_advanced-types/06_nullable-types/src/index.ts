function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hola');
}

greet('arthur'); // ARTHUR
greet(null); // Hola
