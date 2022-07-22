/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test

console.log(addPropertyV1({}, 'new', 22));
// put your code here

// put your code here

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
console.log(addPropertyV1({}, 'new', 22));
// put your code here

// examples
const transaction = {
  value: 170,
};
addPropertyV3(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

const res1 = addPropertyV3(transaction, 'currency', 'USD');
const res2 = addPropertyV3(res1, 'amount', 300);

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
const res4 = addPropertyV4(transaction, 'currency', 'USD');

console.log('result1', res1);
console.log('result2', res2);
console.log('obj after', transaction);
