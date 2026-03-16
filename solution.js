// Problem 1: The Strict Type Checker
function checkVariable(input) {
    switch (typeof input) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "bigint":
            return "bigint";
        case "undefined":
            return "undefined";
        case "object":
            return "object"; // includes null and objects
        default:
            return "unknown";
    }
}

// Test
console.log(checkVariable("hello"));
console.log(checkVariable(10));
console.log(checkVariable(true));
console.log(checkVariable(null));


// Problem 2: Secure ID Generator
function generateIDs(count) {
    let ids = [];

    for (let i = 0; i < count; i++) {
        if (i === 5) {
            continue; // skip 5
        }
        ids.push(`ID-${i}`);
    }

    return ids;
}

// Test
console.log(generateIDs(7));


// Problem 3: The Functional Sum
function calculateTotal(...numbers) {

    if (!numbers.every(num => typeof num === "number")) {
        throw new TypeError("Invalid input: All arguments must be numbers");
    }

    return numbers.reduce((total, num) => total + num, 0);
}

// Test
try {
    console.log(calculateTotal(5, 10, 15));
} catch (error) {
    console.log(error.message);
}


// Problem 4: Leaderboard Filter
function getTopScorers(playerList) {

    return playerList
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(", ");
}

// Test
const players = [
    {name: "Merry", score: 10},
    {name: "Ana", score: 5},
    {name: "Irish", score: 9},
    {name: "Mariebeth", score: 7},
    {name: "Vaje", score: 11}
];

console.log(getTopScorers(players));


// Problem 5: The Private Inventory
class Item {

    #discount = 0.1; // private property

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}

// Test
const product = new Item("Laptop", 1000);
console.log(product.finalPrice);


// Problem 6: Robust Division
function safeDivide(a, b) {

    try {

        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;

    } catch (error) {

        return error.message;

    } finally {

        console.log("Operation attempted");

    }
}

// Test
console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));