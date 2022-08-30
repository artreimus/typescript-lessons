function calculateTax(income: number, taxYear = 2022): number {
  // function calculateTax(income: number, taxYear?: number): number {
  // question mark = optional parameter or when can use a default parameter
  // function *name* (parameter : type) : *returnType*
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);
