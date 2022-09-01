// ( object, name of method, descriptor object of the target method )
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function; // original say function
  descriptor.value = function (...args: any) {
    // we cannot use arrow functions here because they don't have the this keyword
    // Replaces the say method
    console.log('Before');
    original.call(this, ...args); // call the function (this, parameter for function) we destrcutured it to pass the parameter one at a time
    console.log('After');
  };
}

class Person {
  @Log
  say(message: string) {
    console.log('Person says ' + message);
  }
}

let person = new Person();
person.say('Hello');
