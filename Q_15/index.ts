//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

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


