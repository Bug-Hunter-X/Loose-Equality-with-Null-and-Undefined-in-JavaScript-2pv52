function foo(x) {
  if (x === null) {
    return 0;
  }
  if (x === undefined) {
    return 0; // or handle undefined differently as needed
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0