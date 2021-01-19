function calculate() {
  const array = [-6, -4, 0, 1, 2, 2, 3, 10, 12, 44, 52, 72, 98];

  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }

  console.log(sum);
}

calculate();
