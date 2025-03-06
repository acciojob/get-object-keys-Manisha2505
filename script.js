const student = {
  name: "John";
	age: 27;
city: "Delhi"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Do not change the code below this line
window.student = student;
window.getKeys = getKeys;