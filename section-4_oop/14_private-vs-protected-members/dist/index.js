"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
function printNames(people) {
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
//# sourceMappingURL=index.js.map