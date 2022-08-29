type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

// Optional element access oeprator
// customer?.[0]

// Optional call
let log: any = null;
log?.('a'); // optional function call
