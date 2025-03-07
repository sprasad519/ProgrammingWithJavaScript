// var cubes = "ABCDEFG";
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//   var styles =
//     "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//   console.log("%c" + cubes[i], styles);
// }
// var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
// var fruts = [
//   "apple",
//   "banana",
//   "orange",
//   "mango",
//   "grape",
//   "pineapple",
//   "strawberry",
//   "watermelon",
//   "cherry",
//   "papaya",
// ];

// function listArrayItems(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]); //display the array item where the index is euqal to i
//   }
//   console.log();
// }

// listArrayItems(colors);
// listArrayItems(fruts);

// const x = 10;
// console.log(x);

// try {
//   console.log(a + b);
// } catch (err) {
//   console.log(err);
//   console.log("There was an error");
// }
// throw new Error();
// console.log("Hello");

// var result = "Hello".lastIndexOf("H");
// console.log(result);

// var str = "Hello";
// var x = str.match("Jello");
// console.log(x);
try {
  Number(5).toPrecision(345);
} catch (e) {
  console.log("There was an error");
}
