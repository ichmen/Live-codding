const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(entry => ({ ...entry[1], id: entry[0] }))
//     .sort((a, b) => a.age - b.age);

// const result = getCustomersList(customers);

// const getCustomersListV2 = obj => Object.entries(obj).map(([id, obj]) => ({ ...obj, id }));
// // .sort((a, b) => a.age - b.age);
// const result2 = getCustomersListV2(customers);

// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, customerObj]) => acc.push({ id, ...customerObj }), [])
//     .sort((a, b) => a.age - b.age);

// dont use vslues
//

// const getCustomersListv3 = obj => {
//   const keys = Object.keys(obj);
//   // const values = Object.values(obj);

//   return keys.map(key => ({ ...obj[key], id: keys })).sort((a, b) => a.age - b.age);
// };

// // BAD
// //
// // const getCustomersList = obj => {
// //   const customersIdList = Object.keys(obj);

// //   const resultArray = Object.values(obj)
// //     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
// //     .sort((a, b) => a.age - b.age);
// //   return resultArray;
// // };

// const getCustomersListVV = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

const getCustomersList = obj => {
  const moderArr = Object.entries(obj).map(arr => {
    let id = { id: arr.shift() };
    return (arr[0] = { ...arr[0], ...id });
  });

  return moderArr.sort((a, b) => a.age - b.age);
};

const getCustomersList = customers =>
  Object.keys(customers)
    .reduce((acc, elem, index) => {
      acc[index] = { id: elem, ...customers[elem] };
      return acc;
    }, [])
    .sort((a, b) => a.age - b.age);

const getCustomersList = obj => {
  // obj is the object we want to get the keys from
  const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
  const first = order.map(el => el[1]); // get the values
  const second = order.map(el => el[0]); // get the keys
  return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
};
