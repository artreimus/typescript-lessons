class Person {
  constructor(private firstName: string, private lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  private walk() {
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

class Principal extends Person {
  // we don't have a constructor because we want to inherit the constructor from person class

  override get fullName(): string {
    return 'Principal ' + super.fullName;
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

let student = new Student(1, 'Arthur', 'Reimus');
let teacher = new Teacher('Steve', 'Jobs');

printNames([
  new Student(1, 'Arthur', 'Reimus'),
  new Teacher('Steve', 'Jobs'),
  new Principal('Steve', 'Wozniak'),
]);

s;

// Polymorphism - Follows the open closed principle. Class should be open for extension and closed for modification.
