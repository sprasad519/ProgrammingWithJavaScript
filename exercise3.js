function addTwoNums(a, b) {
  try {
    if (typeof a !== "number") {
      throw new ReferenceError("The frist argument is not a number! ");
    } else if (typeof b !== "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}

addTwoNums(5, "4");
console.log("It still works");
