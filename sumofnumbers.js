function sumFor(array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum;
}

console.log(sumFor(sumofnumbers));

function sumWhile(array) {
  let sum = 0;
  let index = 0;
  while (index < array.length) {
    sum += array[index++];
  }
  return sum;
}

console.log(sumWhile(sumofnumbers));

function sumRecursion(array, sum) {
  return array.length === 0 ? sum : sumRecursion(array.slice(0, array.length - 1), sum + array[array.length - 1]);
}

console.log(sumRecursion(sumofnumbers));

function sumTheSimpleWay(array) {
  return _.reduce(array, (sum, item) => sum + item);
}

console.log(sumTheSimpleWay(sumofnumbers));
