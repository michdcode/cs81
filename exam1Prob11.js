// Create a an Object constructor function called MedRecord with the properties firstName,
// lastName, medRecord, medID, insuranceInfo.
// Define a MedRecord prototype method called changeInsurance() that accepts the name of a
// patient new insurance information and update object insuranceInfo property.


function MedRecord (fname, lname, medrec, medicalID, insInfo) {
	this.firstName = fname;
	this.lastName = lname;
	this.medRecord = medrec;
	this.medID = medicalID;
	this.insuranceInfo = insInfo;
}

MedRecord.prototype = {
	constructor: MedRecord,

	changeInsurance: function (updatedInsuranceInfo) {
		this.insuranceInfo = updatedInsuranceInfo;
		console.log("Insurance Information Updated.");
	}
};

// Examples:
var myRec = new MedRecord("Jane", "Thomas", "medical information", 8150158, "Blue Cross");
myRec.changeInsurance("Kaiser");