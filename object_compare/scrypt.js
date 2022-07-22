// function compareObjects(obj1, obj2) {
//   // put your code here
//   let isEqual = true;
//   if (Object.keys(obj1).length != Object.keys(obj2).length) {
//     return false;
//   }
//   Object.keys(obj1).forEach(key => {
//     if (!(Object.keys(obj2).includes(key) && obj1[key] == obj2[key])) {
//       isEqual = false;
//     }
//   });
//   return isEqual;
// }
// function compareObjects(obj1, obj2) {
//   if (Object.keys(obj1).length != Object.keys(obj2).length) {
//     return false;
//   }
//   return Object.keys(obj1)
//     .reduce((isEqual, key, index, arr) => {
//       if (!isEqual) {
//         arr.splice(1);
//       }
//       return Object.keys(obj2).includes(key) && obj1[key] == obj2[key] && isEqual;
//     }, true);
// }

// examples
const obj1 = {
  name: 'Bob',
  age: 17,
  student: true,
};

const obj2 = {
  age: 17,
  car: true,
  name: 'Bob',
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
  car: 'red',
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compare2(obj1, obj2)); // ==> false
// compareObjects(obj1, obj2);
// compareObjects(obj2, obj3); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true

function compare2(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  return keys1.length === Object.keys(obj2).length && keys1.every(key => obj1[key] === obj2[key]);
}
