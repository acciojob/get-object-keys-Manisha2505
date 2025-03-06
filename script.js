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
  getKeys() {
    return Object.keys(this);
  }
};

// Function to get all keys from an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Do not change the code below this line
window.student = student;
window.getKeys = getKeys;

