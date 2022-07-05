-------------------------------------------------------------------------

# JS_functions #

-------------------------------------------------------------------------

Example:

```
const items = [
  {name: 'Bike', price: 100},
  {name: 'Car', price: 200},
  {name: 'Boat', price: 300},
  {name: 'Plane', price: 400},
  {name: 'Train', price: 500},
  {name: 'Bus', price: 600},
  {name: 'Truck', price: 700},
];

```

### filter() ###

- creates a new array filled with elements that pass a test provided by a function.
<br/>The filter() method does not execute the function for empty elements.
<br/>The filter() method does not change the original array. 


```
const filteredItems = items.filter((item) => { return item.price >= 500 })
console.log(filteredItems);

const filteredItemsByCharacterE = items.filter((item) => { return item.name.endWith('e');})
console.log(filteredItemsByCharacterE);
```

### map() ###

- The map() works like the select in C# . 
<br/> map() creates a new array from calling a function for every array element.
<br/> map() does not change the original array.
```
const itemNames = items.map (item => {
  return item.name;
});

const itemPrices = items.map (item => {
  return item.price;
});

console.log (itemNames);
console.log (itemPrices);
```

### find() ###

- If we want to find something with specific properties, we use find(). 
- The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found. The find() method does not execute the function for empty elements.


```
const foundItemByName = items.find (item => {
  return item.name === 'Bike';
});

const foundItemByPrice = items.find (item => {
  return item.price === 500;
});

console.log (foundItemByName);
console.log (foundItemByPrice);
```

### forEach() ###

- JavaScript Array provides the forEach() method that allows you to run a function on every element. The forEach() method iterates over elements in an array and executes a predefined function once per element.

```
items.forEach (item => {
  console.log (item.name);
});

items.forEach (item => {
  console.log (item.price);
});
```

### some() ### 

- The some() method tests whether at least one element in the array passes the test implemented by the provided function. <br/>It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.<br/> It doesn't modify the array

- if some of items pass a specific condition // return true or false
```


const hasInexpensiveItems = items.some (item => {
  return item.price <= 100;
});

const HasFreeCostItems = items.some (item => {
  return item.price <= 0;
});

console.log (hasInexpensiveItems);
console.log (HasFreeCostItems);
```

### every() ### 

- The every() method executes a function for each array element. <br/>The every() method returns true if the function returns true for all elements. <br/>The every() method returns false if the function returns false for one element. <br/>The every() method does not execute the function for empty elements.
```
const hasItemsUnderPrice = items.every (item => {
  return item.price <= 1000;
});

console.log (hasItemsUnderPrice);
```

### reduce() ###

- For reduce, we need to know that takes two parameters and return a value type result.
  At the first parameter in my example I take a variable currentTotal, that takes the current sum with the item,and i set with the number 0.For every item of our array, we run this calculation and finally we have the total sum Of all items of array.
- The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

```
const totalPrice = items.reduce (
  (currentTotal, item) => currentTotal + item.price,
  0
);
console.log (totalPrice);
```
### include() ### 

- JavaScript includes() is a built-in function that can be used to determine whether an array contains a particular item

```
const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const includesTwo = items.includes (2);

console.log (includesTwo);

```
