//In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.
// To make the counter increment by 1 on each loop, you will use i++.
// The exit condition for the for loop should match the output given below.
// Inside the loop, write an if-else statement, which will check the following conditions:
// First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".
// Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".
// Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".
// For all the remaining values of i, your code will console log just the value of i.
for (let i = 1; i < 11; i++) {
  if (i == 1) {
    console.log("Gold Medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}

console.log("Using Switch");
for (let x = 1; x < 11; x++) {
  switch (x) {
    case 1:
      console.log("Gold Medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(x);
  }
}
