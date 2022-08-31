function echo<T>(arg: T): T {
  return arg;
}

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

class Entity<T> {
  constructor(private id: T) {}
}

interface User {
  userId: number;
  username: string;
}

type ReadOnly<User> = {
  readonly [K in keyof User]: User[K]; // keyof returns userID | username
};
