type User = {
  name: string;
  age: number;
  occupation?: string;
};

let users: User[] = [
  // Type Instance
  {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
  },
  {
    name: 'Kate Muller',
    age: 28,
  },
];

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

let pet: Bird | Fish = {
  // Union type
  fly: () => console.log('flying!'), // We set it to Bird
};

pet.fly();

type DayOfWeek = // Literal type

    | 'Monday'
    | 'Tuesday'
    | 'Wednedsay'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

let day: DayOfWeek = 'Tuesday';

function getUser(): User {
  return users?.[0];
}
let user = getUser();
console.log(user?.address?.street);

function bar(): void {
  console.log('bar');
}
let foo = 'foo';

let x = foo ?? bar();

let value: unknown = 'a';

if (typeof value === 'string') console.log(value.toLocaleUpperCase);
