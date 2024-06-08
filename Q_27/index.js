"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color = 'Green';
//version 1
if (alien_color === 'Green') {
    console.log("the player just earned 5 points");
}
else {
    console.log(" the player just earned 10 points");
}
//Version 2
let alien_color2 = "Yellow";
if (alien_color2 === 'Yellow') {
    console.log("the player just earned 10 points");
}
else {
    console.log(" the player just earned 5 points");
}
//Version 3
let alien_color3 = "Red";
if (alien_color3 === 'Red') {
    console.log("the player just earned 15 points");
}
else {
    console.log(" the player just earned 5 points");
}
