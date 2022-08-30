class Logger {
  constructor(private fileName: string) {}

  writeMessage(message: string) {
    console.log('Writing ' + message + ' to ' + this.fileName);
  }
}

class Person {
  constructor(private firstName: string, private lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(private salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

// Private = can only be used within the parent class because they are not inherited
// Protected = can be used within the parent class and it's children class

interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface IEmployee {
  name: string;
  salary: number;
  adddess: Address;
}
