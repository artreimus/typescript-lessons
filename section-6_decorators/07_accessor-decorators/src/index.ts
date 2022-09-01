function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    // original!.call(this); // ! = suree that it is not null or undefined
    const result = original?.call(this); // if (original !== null && original !== undefined) original.call(this);
    return typeof result === 'string' ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    // can return any type
    // return `${this.firstName} ${this.lastName}`;
    return null;
  }
}

let person = new Person('arthur', 'reimus');
console.log(person.fullName);
