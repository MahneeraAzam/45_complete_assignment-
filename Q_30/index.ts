// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you again.for logging in again.

let usernames: string[] = ["Admin", "Mindi", "Mahneera", "Arshi", "Mamur"];

for (let index = 0; index < usernames.length; index++) {

    if ( usernames[index] === "Admin") {
        console.log("Hello admin, would you like to see a status report ? ");
        
    }else{
        console.log(`\n\t Hello ${usernames[index]} thank you for logging in again.\n\t`);
        
    }
  
}
