function kgToLbs(weight: number | string) {
  if (typeof weight === 'number') {
    // narrowing
    // weight.toFixed; // methods for numbers only
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2; // convert to int
  }
}

kgToLbs(10);
kgToLbs('10kg');
