interface Product {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
  // This is type mapping
  // We used Index signature and keyof to re-create the interface Product
  // and set all the propeties to readonly
};

// type with optional properties
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// type with nullable properties
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnly<Product> = {
  name: 'a',
  price: 1,
};
