"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let Favorite_fruit = ["banana", "Mango", "grapes"];
if (Favorite_fruit.includes("cherry")) {
    console.log("I really likes cherry");
}
if (Favorite_fruit.includes("banana")) {
    console.log("I really likes banana");
}
if (Favorite_fruit.includes("Mango")) {
    console.log("I really likes Mango");
}
if (Favorite_fruit.includes("grapes")) {
    console.log("I really likes grapes");
}
if (Favorite_fruit.includes("melon")) {
    console.log("I really likes melon");
}
