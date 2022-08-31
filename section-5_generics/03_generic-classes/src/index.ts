class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

// the 2 lines of codes below do the same thing...
// let pair = new KeyValuePair<string, string>('1', 'a');
let pair = new KeyValuePair('1', 'a'); // we don't have to explicitly declare the generics.
