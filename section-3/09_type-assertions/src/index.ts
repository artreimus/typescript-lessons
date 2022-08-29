// let phone = document.getElementById('phone') as HTMLInputElement; // type assertion
let phone = <HTMLInputElement>document.getElementById('phone'); // similar to above

phone.value;
