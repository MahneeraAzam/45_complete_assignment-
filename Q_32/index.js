"use strict";
//Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Mahneera", "Mindi", "rohan", "kabeer", "elhan"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["mahneera", "mindi", "jahanzaib", "azam", "elhan"];
let lowerCase = [];
for (let j = 0; j < current_users.length; j++) {
    lowerCase.push(current_users[j].toLowerCase());
}
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let index = 0; index < new_users.length; index++) {
    if (lowerCase.includes(new_users[index])) {
        console.log(` ${new_users[index]} is not available`);
    }
    else {
        console.log(` ${new_users[index]} it is available`);
    }
}
