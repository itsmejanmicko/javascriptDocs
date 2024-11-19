const store = {
    name: "Tech Store", // Object property
    location: "Downtown", // Object property
    items: [ // Array of item objects
        { name: 'Bike', price: 100 },
        { name: 'TV', price: 200 },
        { name: 'Album', price: 10 },
        { name: 'Book', price: 5 },
        { name: 'Phone', price: 500 },
        { name: 'Computer', price: 1000 },
        { name: 'Keyboard', price: 25 },
    ],

    // Method: Display store info
    getStoreInfo() {
        return `Welcome to ${this.name} located at ${this.location}!`;
    },

    // Method: Filter items by price
    filterItemsByPrice(maxPrice) {
        return this.items.filter((item) => item.price <= maxPrice);
    },

    // Method: Add a new item to the store
    addItem(name, price) {
        this.items.push({ name, price });
        console.log(`Added new item: ${name} at $${price}`);
    },

    // Method: Get all item names
    getItemNames() {
        return this.items.map((item) => item.name);
    },

    // Method: Display all items with a formatted string
    displayItems() {
        return this.items.map((item) => `Item: ${item.name}, Price: $${item.price}`).join("\n");
    },

    // Method: Calculate total value of items
    calculateTotalValue() {
        return this.items.reduce((total, item) => total + item.price, 0);
    },

    // Method: Sort items by price and use this to refer to items
    sortItemsByPrice(order = 'asc') {
        return [...this.items].sort((a, b) =>
            order === 'asc' ? a.price - b.price : b.price - a.price
        );
    }
};

// Example Usage:
console.log(store.getStoreInfo()); // Accessing store info
console.log("Filtered Items (<= 100):", store.filterItemsByPrice(100)); // Filter items
store.addItem("Tablet", 300); // Adding a new item
console.log("Item Names:", store.getItemNames()); // Get item names
console.log("Display All Items:\n" + store.displayItems()); // Display all items
console.log("Total Store Value:", store.calculateTotalValue()); // Total value
console.log("Sorted Items (Descending):", store.sortItemsByPrice('desc')); // Sort items
