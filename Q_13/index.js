"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let transportation = ["motorcycle", "car", "Airoplane", "Train"];
let msg = "I would like to own";
for (let index = 0; index < transportation.length; index++) {
    console.log(` ${msg} ${transportation[index]}`);
}
