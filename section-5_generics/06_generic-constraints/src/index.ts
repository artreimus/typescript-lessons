interface Person {
  name: string;
}

class PersonClass {
  constructor(public name: string) {}
}

class Customer extends PersonClass {}

function echo<T extends number | string>(value: T): T {
  // generic constraint : we can only pass in number or strings here
  return value;
}

function echoPrimitive<T>(value: T): T {
  // generic constraint : we can only pass in number or strings here
  return value;
}

function echoObject<T extends { name: string }>(value: T): T {
  return value;
}

function echoInterface<T extends Person>(value: T): T {
  return value;
}

function echoClass<T extends PersonClass>(value: T): T {
  return value;
}

echo('any type here');
echoPrimitive('only strings or number');
echoObject({ name: 'only objects with name property' });
echoInterface({ name: 'this object implements Person' });
echoClass({ name: 'this object extends Person' });
echoClass(new PersonClass('name'));
echoClass(new Customer('name'));
