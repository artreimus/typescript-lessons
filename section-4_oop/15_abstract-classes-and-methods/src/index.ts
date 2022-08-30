abstract class Shape {
  constructor(public color: string) {}

  // abstract methods can only exist within abstract classes
  abstract render(): void; // no braces for abstract methods.
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering a circle');
  }
}

// let shape = new Shape('Red'); // we cannot create an instance of an abstract Class
