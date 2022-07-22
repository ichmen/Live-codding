// create new arr
// iterate inp arr
// apply callback fo each elem
// if true =>push

const filterArrayElements = (arr, callback) => {
  // put you code here
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resArr.push(el);
    }
  }
};

// test data
// console.log(filterArrayElements([20], el => (el > 2 ? true : false)));
const testArr = [225, 23, 77, 2, 5, 14, 3, 1, NaN];
const testCallback = (el, ind, arr) => el > 10 && ind > 2;
console.log(filterArrayElements(testArr, testCallback));

function multiply(...args) {
  console.log(args);
  return args.reduce((acc, el) => acc * el);
}
// test
console.log(multiply(10, 3, 6));

const mapArrayElements = (arr, callback) => {
  const entireArr = arr;
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    resArr.push(callback(arr[index], index, entireArr));
  }
  return resArr;
};
console.log('start');
console.log(mapArrayElements(testArr, el => el * 2));
