function greet(firstName, lastName, gender) {
  console.log(`Hello ${firstName} ${lastName}`);

  let pronoun = gender == "M" ? "Sir" : "Ma'am";

  console.log(`How may I help you ${pronoun}`);
}

function count(level) {
  for (let i = 1; i <= level; i++) console.log(i);
}

function printEven(arr) {
  const n = arr.size();
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) console.log(arr[i]);
  }
}

function biggestNumber(arr) {
  const n = arr.size();
  let largest = arr[0];

  for (let i = 1; i < n; i++) {
    if (largest < arr[i]) largest = arr[i];
  }

  return largest;
}

function printFirstNames(obj) {
  for (var key in obj) {
    if (key["gender"] == "M") console.log(`First name is ${key["firstName"]}`);
  }
}

function reverseAll(arr) {
  return arr.reverse();
}

/*
For today -
1. Create a counter in Javascript (counts down from 30 to 0)
2. Calculate the time it takes between a setTimeout call and the inner function actually running
3. Create a terminal clock (HH:MM:SS)
*/

greet("Shatansh", "Patnaik", "M");
count(10);
