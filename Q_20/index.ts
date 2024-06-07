//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let randomArray: string[] = ["Urdu", "Germon", "Franch", "chinese", "Korean"];

console.log(randomArray);

let randomArray2: string[] = []

randomArray2.splice(0, 0, "Urdu", "Germon", "Franch", "chinese", "Korean")

for (let index = 0; index < randomArray2.length; index++) {
    console.log(`we add multiples values in our Array \n\t` + randomArray2[index]);
    
}
