//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let invited_person :string[] = ["Usama_Billadin", "Obama", "Quaide_E_Azam",];

let msg :string = "I am inviting u at dinner";

for (let index = 0; index < invited_person.length; index++) {
    
    console.log(`Mr. ${invited_person[index]} ${msg}`);
    
}

