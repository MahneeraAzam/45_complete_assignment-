"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansArray = ["magician_1", "magician_2", "magician_3"];
function show_magicians(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(magiciansArray[index]);
    }
}
show_magicians(magiciansArray);
