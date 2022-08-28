let employee: {
  id: number;
  name?: string;
} = { id: 1, name: 'Arthur' };

let employeeTwo: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void; // return value of method
} = {
  id: 1,
  name: 'Arthur',
  retire: (date: Date) => {
    console.log(date);
  },
};

let a = [true, false, false];
