class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers = ArrayUtils.wrapInArray(1);
let strings = ArrayUtils.wrapInArray('1');
