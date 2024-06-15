//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function sandwich(array:string[]) {
  console.log("\nYour item is ready included");
  console.log(`${array}`);
  console.log("Enjoy your meal");
  
  
  
}
sandwich(["Item_1", "Item_2", "Item_3"])
sandwich(["Item_4", "Item_5", "Item_6"])
sandwich(["Item_7", "Item_8", "Item_9"])