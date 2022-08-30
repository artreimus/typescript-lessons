class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  walk() {
    console.log('Walking');
  }
}

class Student extends Person {
  // We should implement every class in separate files
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test');
  }
}

let student = new Student(1, 'Arthur', 'Reimus');
