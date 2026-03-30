let name = "Alice";
let age = 20;
let major = "Computer Science"; // though i don't know what major represents i just put anuthing i like

console.log("Hello, " + name);
console.log("Age:", age);
console.log("Major:", major);

// Function to greet
function greet(user) {
    alert("Welcome, " + user);
}
greet("Bob");

function calculateSum(a, b) {
    let sum = a + b;
    alert("The sum is: " + sum);
}
calculateSum(5, 7);

let number = prompt("Enter a number:");

if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}

// Loop through array
let fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
