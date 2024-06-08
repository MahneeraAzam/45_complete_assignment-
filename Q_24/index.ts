//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality 
console.log("Mindi" as string === "Mahneera"); //false
//test for inequality
console.log("Mindi" as string != "Mahnnera"); //true


// • Tests using the lower case method
console.log("Arshi".toLowerCase() === "arshi"); //true

// • Numerical tests involving equality and inequality, 
console.log(24 === 24); //true

// greater than and less than, 
console.log(25 as number != 24); //true

// greater than,
console.log(10 > 5); //true

// and less than or equal to.
console.log(10 < 5); //false

// greater than,
console.log(10 >= 5); //true

// greater than or equal to,
console.log(10 <= 5); //false

// • Tests using "and" 
console.log(8 === 8 && 7 === 7); //true

// "or" operators
console.log(10 < 5 || 7 > 9); //false

// • Test whether an item is in a array
let arrayName = ["Mindi", "Kouser", "Mamur"]
console.log(arrayName.includes("Mindi") === true); //true

// • Test whether an item is not in a array
let arrayName2 = ["Mindi", "Kouser", "Mamur"]
console.log(arrayName.includes("Aiman") === true); //false
