interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

// There are 3 options extend Generic Class

// Option 1
// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let compressibleStore = new CompressibleStore<Product>();
compressibleStore.compress();

// Option 2
// Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  // We tell the generic that the T has a property name
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Option 3
// Fix the generic type Parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
