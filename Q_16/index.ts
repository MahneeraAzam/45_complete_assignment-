//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let invited_person :string[] = ["Usama_Billadin", "Obama", "Quaide_E_Azam",];

let message :string = "I am inviting u at dinner";

for (let index = 0; index < invited_person.length; index++) {
    
    console.log(`Mr. ${invited_person[index]} ${message}`);
    
}
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.


let absent_person :string = "Usama_Billadin";

let new_guest :string = "Gandi_Ji"

console.log(`\nMr, ${absent_person}` , "Unfortunately, He is not coming");

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

invited_person[0] = new_guest;

// Print a second set of invitation messages, one for each person who is still in your list.

for (let index = 0; index < invited_person.length; index++) {
    
    console.log(`Mr. ${invited_person[index]} ${message}`);
    
}

// Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("\nBreaking News everyone, We found a big table\n");

//Add one new guest to the beginning of your array.


let invited_person1 = invited_person.unshift('Fatima_Jinnah');

// Add one new guest to the middle of your array. 
let invited_person2 = invited_person.splice(2,0,"Hafiz_Jalandari")

console.log(invited_person);

//Use append() to add one new guest to the end of your list.
let invited_person3  = invited_person.push('sirSyedAhmadKhan')

//Print a new set of invitation messages, one for each person in your list.

for (let index = 0; index < invited_person.length; index++) {
    
    console.log(`Mr. ${invited_person[index]} ${message}`);
    
}
