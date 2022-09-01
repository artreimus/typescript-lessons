function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          // data validation
          throw new Error(
            `${propertyName} should be ata least ${length} characters long`
          );
        } else {
          value = newValue;
        }
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User('1234');
// user.password = '123';
console.log(user.password);
