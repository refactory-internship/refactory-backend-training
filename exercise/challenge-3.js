function calculate(length) {
  const array = Array(length).fill().map(() => Math.round(Math.random() * length));
  const len = array.length;
  const arraySort = array.sort();
  const mid = Math.ceil(len / 2);

  //find sum
  let sum = 0;
  for (let index = 0; index < len; index++) {
    sum += arraySort[index];
  }

  //find minimum value
  let min = arraySort[0];
  for (let index = 0; index < len; index++) {
    if (arraySort[index] < min) {
      min = arraySort[index];
    }
  }

  //find maximum value
  let max = arraySort[0];
  for (let index = 0; index < len; index++) {
    if (arraySort[index] > max) {
      max = arraySort[index];
    }
  }

  //find average
  const average = (sum / len).toFixed(2);

  //find median
  const median = len % 2 == 0 ? (arraySort[mid] + arraySort[mid - 1]) / 2 : arraySort[mid - 1];

  console.log('Your numbers = ' + arraySort);
  console.log('Maximum value =  ' + max);
  console.log('Minimum value =  ' + min);
  console.log('Median =  ' + median);
  console.log('Average =  ' + average);
  // console.log('Sum =  ' + sum);
}

calculate(7);