// Write a JavaScript function to check if an object contains given property. Create a
// function checkGivenProperty() that accepts a object and a property name as
// arguments and return true or false.
// Tip 1: Use hasOwnProperty.call()
// Tip 2: First create an object with properties , then use hasOwnProperty.call() to check
// for a given property.

var person = {
	name: "John Doe",
	age: 30,
	city: "Los Angeles",
	major: "Computer Science",
	sayInfo: function() {
		console.log(this.name + ", lives in: " + this.city);
	}
};

function checkGivenProperty(obj, prop) {
	return obj.hasOwnProperty(prop);
}

console.log(checkGivenProperty(person, "name"));
console.log(checkGivenProperty(person, "state"));