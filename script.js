//your JS code here. If required.
// Create the student object
// const student = {
//   name: "John",
// 	age: 24,
// 	city: "delhi"
// };

// // Function to get all keys from the object
// function getKeys(obj) {
//   return Object.keys(obj);
// }

// // Testing the function
// console.log(getKeys(student)); // Output: ["name"]

// Create the student object
// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional test cases
const student2 = {
  name: "Alice",
  age: 22,
  city: "New York"
};
console.log(getKeys(student2)); // Output: ["name", "age", "city"]

const student3 = {
  course: "Mathematics"
};
console.log(getKeys(student3)); // Output: ["course"]
// Do not change the code below this line
window.student = student;
window.getKeys = getKeys;

