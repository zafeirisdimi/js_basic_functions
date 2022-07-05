let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.map (element => {
  return element * 2;
});

// filter reduce

// let fetch = new Promise ();
// fetchData.then (repsonse => {}).catch (err => {}).finally (() => {
//   console.log ('requrest finished');
// });

//async js

const items = [
  {name: 'Bike', price: 100},
  {name: 'Car', price: 200},
  {name: 'Boat', price: 300},
  {name: 'Plane', price: 400},
  {name: 'Train', price: 500},
  {name: 'Bus', price: 600},
  {name: 'Truck', price: 700},
];

const filteredItems = items.filter (item => {
  return item.price < 100;
});

const filteredItemsByName = items.filter (item => {
  return item.name.endsWith ('e');
});

console.log (filteredItemsByName);

const itemNames = items.map (item => {
  return item.name;
});

const itemPrices = items.map (item => {
  return item.price;
});

console.log (itemNames);
console.log (itemPrices);

const foundItemByName = items.find (item => {
  return item.name === 'Bike';
});

const foundItemByPrice = items.find (item => {
  return item.price === 500;
});
console.log (foundItemByName);
console.log (foundItemByPrice);

items.forEach (item => {
  console.log (item.name);
});

const hasInexpensiveItems = items.some (item => {
  return item.price <= 100;
});

const HasFreeCostItems = items.some (item => {
  return item.price <= 0;
});

console.log (hasInexpensiveItems);
console.log (HasFreeCostItems);

const hasItemsUnderPrice = items.every (item => {
  return item.price <= 1000;
});

console.log (hasItemsUnderPrice);

const totalPrice = items.reduce (
  (currentTotal, item) => currentTotal + item.price,
  0
);

console.log (totalPrice);

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const includesTwo = items.includes (2);

console.log (includesTwo);
