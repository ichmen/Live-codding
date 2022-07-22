// 'use strict';

// /**
//  * @param {string[]} keysList
//  * @param {array} valuesList
//  * @return {object}
//  */
// // 1.create new Object
// // 2. iterate keylist
// // 3. put key/value in obj
// //

// // function buildObject(keysList, valuesList) {
// //   // put you code here
// //   const obj = {};
// //   for (let index = 0; index < keysList.length; index += 1) {
// //     obj[keysList[index]] = valuesList[index];
// //   }
// //   return obj;
// // }
// const buildObject = (keysList, valuesList) =>
//   keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

// inp: obj1,obj2
// boolean

function compareObjects(obj1, obj2) {
  // put your code here
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
