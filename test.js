async function* asyncGenerator() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
  }
  
  const array = await Array.fromAsync(asyncGenerator());
  console.log(array); // Output: [1, 2, 3]