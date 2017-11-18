// Create a an Object constructor function called BankAcct with the properties 
// acctNum, acctOwner, checkBalance, saveBalance, acctType.
// Define a BankAcct.prototype method called checkTransfer() 
// that accepts a amount as an argument. The method should check 
// if the amount + checkBalance is greater than 0 before setting a new checkBalance amount.


function BankAcct(iacctNum, iacctOwner, icheckBalance, isaveBalance, iacctType){
	this.acctNum = iacctNum;
	this.acctOwner = iacctOwner;
	this.checkBalance = icheckBalance;
	this.saveBalance = isaveBalance;
	this.acctType = iacctType;
}

BankAcct.prototype = {
	constructor: BankAcct,
	
	checkTransfer: function(amount){
		if (amount + this.checkBalance > 0){
			this.checkBalance = amount + this.checkBalance;
		} else {
			console.log("The balance is not greater than 0.");
		}
	}
};

//
var gregAcct = new BankAcct (12656, "Greg", 27.23, 1737.13, "checking");
gregAcct.checkTransfer(50);
gregAcct.checkBalance;