"use strict";
//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansArray = ["magician_1", "magician_2", "magician_3", "magician_4"];
function copy_array(arr) {
    return [...arr];
}
let arr_copy = copy_array(magiciansArray);
arr_copy[0] = "Mindi";
function make_great(arr) {
    for (let index = 0; index < arr.length; index++) {
        arr_copy[index] = `The Great ${arr[index]}`;
    }
}
make_great(arr_copy);
function show_magician(arr) {
    return arr;
}
console.log("Original Array", show_magician(magiciansArray));
console.log("Modified Array", show_magician(arr_copy));
