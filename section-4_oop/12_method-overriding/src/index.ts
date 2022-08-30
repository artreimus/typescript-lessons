class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
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

class Teacher extends Person {
  // we don't have a constructor because we want to inherit the constructor from person class

  override get fullName(): string {
    return 'Professor ' + super.fullName;
  }
}

let student = new Student(1, 'Arthur', 'Reimus');

let teacher = new Teacher('Arthur', 'Reimus');
console.log(teacher.fullName);
