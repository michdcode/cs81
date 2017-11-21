// Put the below data in a JSON formatted array where each individual is its own object. Then write
// code that will print each person's first letter of their first name and last name (example: msmith)
// firstName: Mike lastName: Smith
// firstName: Anna lastName: House
// firstName: Mark lastName: McDonald

var mydata = require("./dataProb12.json");
var dataString = JSON.stringify(mydata);
var data = JSON.parse(dataString);
for (var i = 0; i < data.length; i++) {
	console.log(data[i].firstName.charAt(0) + data[i].lastName);
};
