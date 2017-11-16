// Problem #1 
// Define a Employee.Prototype for the Employee constructor function shown below. 
// The Employee.Prototype should have the property ssn set to "000-00-0000" 
// and dept set to "empty". 
// Also define a Employee.Prototype method that returns the follow string "firstName lastName : dept" 
// function Employee(first, last, ssn, eid, dept) {
// this.firstName = first;
// this.lastName = last;
// this.ssn = ssn;
// this.eid = eid;
// this.dept = dept;
// }
// var eJohnDoe = new Employee("John", "Doe", "123-34-1234", "001234", "acct");
// var eSallyRally = new Employee("Sally", "Rally","123-34-1235", "001235", "hr");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

function Employee(first, last, ssn, eid, dept) {
	this.firstName = first;
	this.lastName = last;
	this.ssn = ssn;
	this.eid = eid;
	this.dept = dept;
}

var eJohnDoe = new Employee("John", "Doe", "123-34-1234", "001234", "acct");
var eSallyRally = new Employee("Sally", "Rally","123-34-1235", "001235", "hr");

Employee.prototype = Object.create(Employee.prototype, {ssn 

}); 
Employee.prototype.constructor = Employee;

Employee.prototype.ssn = "000-00-0000";
Employee.prototype.dept = "empty";
Employee.prototype.sayNameDept = function () {
	console.log(this.firstName + " " + this.lastName + " : " + this.dept);
};

