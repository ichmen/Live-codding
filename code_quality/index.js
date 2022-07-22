// const withdraw = (clients, balances, client, amount) => {
//   // remove logic from if
//   // get rid of duplicated code
//   //don't use find
// if (balances[clients.indexOf(client)]>amount)
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? (balances[clients.indexOf(client)] -= amount) : -1;

//   const balance=balances[clients.indexOf(client)];

// BAD
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

// // GOOD
// const clientIndex = clients.indexOf(client);
// if (balances[clientIndex] < amount) {
//   return -1;
// }
// balances[clientIndex] -= amount;
// return (balances[clientIndex] -= amount);

// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
//   const newBalance = balances[curentClient] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };

// BAD
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] - amount < 0) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// GOOD
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// // NORM
// const withdraw = (clients, balances, client, amount) => {
//   let clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// NORM

// remove else
// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     return -1;
//   }
// };

const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

const getRandomNumbers = (length, from, to) => {
  const arr = new Array(length);
  if (to - from < 1) {
    return null;
  }

  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);
  return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
  return [];
};

console.log(getRandomNumbers(1, 1.7, 2.5));
console.log(getRandomNumbers(1, 0.5, 0.9));
