const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
];

// Filter method: Finds items with a price less than or equal to 100
const filterItems = items.filter((item) => {
    return item.price <= 100;
});
console.log("Filter:", filterItems);

// Map method: Creates a new array with only the names of items
const mapItems = items.map((item) => {
    return item.name;
});
console.log("Map:", mapItems);

// Find method: Returns the first item where the condition is true
const findItems = items.find((item) => {
    return item.name === 'Bike';
});
console.log("Find:", findItems);

// forEach method: Executes a function for each item in the array
items.forEach((item) => {
    console.log("forEach:", item.name);
});

// Some method: Checks if at least one item meets the condition
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});
console.log("Some:", hasInexpensiveItems);

// Every method: Checks if all items meet the condition
const allExpensiveItems = items.every((item) => {
    return item.price <= 100;
});
console.log("Every:", allExpensiveItems);

// Reduce method: Calculates a single value (e.g., total price)
const total = items.reduce((currentTotal, item) => {
    return currentTotal + item.price;
}, 0);
console.log("Reduce (Total Price):", total);

// Includes method: Checks if an item includes a specific string
const includeBikeItem = items.filter(item =>
    item.name.toLowerCase().includes('bike')
);
console.log("Includes:", includeBikeItem);

// Sort method: Sorts items by price in ascending order
const sortedItems = [...items].sort((a, b) => a.price - b.price);
console.log("Sort (Ascending):", sortedItems);

// Reverse method: Reverses the order of the array
const reversedItems = [...items].reverse();
console.log("Reverse:", reversedItems);

// Slice method: Creates a shallow copy of a portion of the array
const slicedItems = items.slice(0, 3); // Get the first three items
console.log("Slice (First 3 items):", slicedItems);

// Splice method: Removes or replaces elements (mutates the array)
const splicedItems = [...items];
splicedItems.splice(1, 2); // Removes 2 items starting from index 1
console.log("Splice (Removed Items):", splicedItems);

// FindIndex method: Returns the index of the first item that meets the condition
const bikeIndex = items.findIndex((item) => item.name === 'Bike');
console.log("FindIndex (Bike):", bikeIndex);

// Concat method: Combines two arrays into a new one
const moreItems = [
    { name: 'Tablet', price: 300 },
    { name: 'Monitor', price: 150 }
];
const combinedItems = items.concat(moreItems);
console.log("Concat:", combinedItems);

// Flat method: Flattens a nested array to a single level
const nestedArray = [[{ name: 'Pen', price: 1 }], [{ name: 'Paper', price: 2 }]];
const flatArray = nestedArray.flat();
console.log("Flat:", flatArray);

// FlatMap method: Combines map and flat into one
const flatMappedItems = nestedArray.flatMap(subArray => subArray);
console.log("FlatMap:", flatMappedItems);
