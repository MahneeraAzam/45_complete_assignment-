"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansArray = ["magician_1", "magician_2", "magician_3", "magician_4"];
function make_great(arr) {
    for (let index = 0; index < arr.length; index++) {
        magiciansArray[index] = "The Great" + arr[index];
    }
}
make_great(magiciansArray);
console.log(magiciansArray);
