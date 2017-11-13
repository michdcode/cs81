// Write a function that will access the object to print 
// "Company: companyField  - Phone: phoneField" to console.log().

var myContacts = require("./dataSet.json");
var ContactString = JSON.stringify(myContacts);
var Contacts = JSON.parse(ContactString);
for (var i = 0; i < Contacts.length; i++) {
	console.log("Company: " + Contacts[i].Company + " - Phone: " + Contacts[i].Phone);
};