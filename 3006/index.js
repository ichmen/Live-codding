/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  // put your code here

  for (index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}
function isPrime(num) {
  for (iter = 2; iter <= Math.ceil(num ** 0.5); iter += 1) {
    if (num % iter == 0 && num !== 2) {
      return false;
    }
  }
  return true;
}
//test case
getPrimes(2);
getPrimes(17);
getPrimes(1111);
