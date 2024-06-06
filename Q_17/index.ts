//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let invited_person :string[] = ["Usama_Billadin", "Obama", "Quaide_E_Azam",];

let message :string = "I am inviting u at dinner";

function foorloop () {
    for (let index = 0; index < invited_person.length; index++) {
    
        console.log(`Mr/Mrs. ${invited_person[index]} ${message}`);
    
    }
}
foorloop ()

//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.


let absent_person :string = "Usama_Billadin";

let new_guest :string = "Gandi_Ji"

console.log(`\nNote:
    Mr, ${absent_person} , Unfortunately, He is not coming\n`);

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

invited_person[0] = new_guest;

// Print a second set of invitation messages, one for each person who is still in your list.

foorloop ()

// Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("\nBreaking News everyone, We found a big table\n");

//Add one new guest to the beginning of your array.


let invited_person1 = invited_person.unshift('Fatima_Jinnah' );

// Add one new guest to the middle of your array. 
let invited_person2 = invited_person.splice(2,0, "Hafiz_Jalandari" )

console.log(invited_person);

//Use append() to add one new guest to the end of your list.
let invited_person3  = invited_person.push('sir Syed Ahmad Khan')

//Print a new set of invitation messages, one for each person in your list.

foorloop ()
// Add a new line that prints a message saying that you can invite only two people for dinner.

console.log(`\n Sorry We can not arrange the big table. we can only invite 2 person`);

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 

while (invited_person.length >= 2) {
    
let Remove_guest1 = invited_person.pop()

console.log(`Sorry dear Mr. ${Remove_guest1}. You are not invited to dinner `);
}



//print a message to that person letting them know you’re sorry you can’t invite them to dinner.

foorloop ()

//Remove the last two names from your list, so you have an empty list.

let Remove_guest5 = invited_person.splice(0,2)

//Print your list to make sure you actually have an empty list at the end of your program.
console.log(invited_person);
