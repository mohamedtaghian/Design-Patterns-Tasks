// 1) Implementation with Iterators
function range(start, end, step = 1) {
  let current = start;

  return {
    next() {
      if (current < end) {
        const result = { value: current, done: false };
        current += step;
        return result;
      }
      return { value: undefined, done: true };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}

// 2) Implementation with a Function Generator
function* range(start, end, step = 1) {
  let current = start;
  while (current < end) {
    yield current;
    current += step;
  }
}

for (const value of range(0, 10, 1)) {
  console.log(value);
}

console.log([...range(1, 10, 1)]);

const iterator = range(1, 10, 1);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
