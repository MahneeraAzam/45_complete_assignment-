//Store the numbers 1 through 9 in a array.

let ordinal_number: number[] = [1,2,3,4,5,6,7,8,9,10]

//Loop through the array.
//Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let index = 0; index < ordinal_number.length; index++) {
    if(ordinal_number[index] === 1){
        console.log(`${ordinal_number[index]}st`);
    }else if(ordinal_number[index] === 2){
        console.log(`${ordinal_number[index]}nd`);
    }else if(ordinal_number[index] === 3){
        console.log(`${ordinal_number[index]}rd`);
    }else if(ordinal_number[index] === 4){
        console.log(`${ordinal_number[index]}th`);
    }else if(ordinal_number[index] === 5){
        console.log(`${ordinal_number[index]}th`);
    }else if(ordinal_number[index] === 6){
        console.log(`${ordinal_number[index]}th`);
    }else if(ordinal_number[index] === 7){
        console.log(`${ordinal_number[index]}th`);
    }else if(ordinal_number[index] === 8){
        console.log(`${ordinal_number[index]}th`);
    }else if(ordinal_number[index] === 9){
        console.log(`${ordinal_number[index]}nd`);
    }
    }




