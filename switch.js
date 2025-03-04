// define a new variable, name it day, and set its value to "Sunday".
// Start coding a switch statement, passing the day variable as the expression to evaluate.
// Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.
// At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').
// Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

var day = "saturday";

switch (day) {
  case "monday":
    console.log("Learn Python");
    break;
  case "tuesday":
    console.log("Learn AI");
    break;

  case "wednesday":
    console.log("Learn Django");
    break;

  case "thrusday":
    console.log("Learn Javascript");
    break;

  case "friday":
    console.log("Learn React");
    break;

  case "saturday":
    console.log("Build fullstack and grab job in good company");
    break;

  case "sunday":
    console.log("Start a startup company");
    break;

  default:
    console.log("There is no such day");
}
