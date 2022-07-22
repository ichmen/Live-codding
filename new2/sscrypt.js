/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */
function getSenseOfLife() {
  return42;
}
// ... code here

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

// ... code here
function getSquared(a) {
  return a * a;
}

console.log(getSquared(2));

/* ф-ция sum должна принимать два числа и вернуть их сумму */
const getSquared = a => a + a;
// ... code here

function sum(num) {
  return num + num;
}

console.log(getSquared(2, 3));
/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */
const sum = num => `I am ${num} years old`;
console.log(sum('ten'));
console.log(sum(NaN));
console.log(sum(34));

// ... code here

function sum(from, to) {
  let res = 0;
  for (let index = from; index <= to; index += 1) {
    res += index;
  }
  return res;
}

function sum(from, to) {
  // put your code here
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}
/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */

const mult = numFts => numFts ** 2;

console.log(mult(1, 4));
// ... code here

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

// ... code here

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

// ... code here
const getMagicNumber = a => 17;

console.log(getMagicNumber());
console.log(getMagicNumber(17));
