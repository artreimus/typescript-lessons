function render(document: unknown) {
  // We need to use type narrowing for unknowkn types
  if (typeof document === 'string') document.toUpperCase();
  //   if (document instanceof === WordDocument); // instance checking for classes and interfaces!
}
