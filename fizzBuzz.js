var number = 1;
while (number <= 120) {
	if (number % 4 == 0 && number % 10 ==0) {
		console.log("FizzBuzz");
	} else if (number % 4 == 0) {
		console.log("Fizz");
	} else if (number % 10 == 0) {
		console.log("Buzz");
	} else {
		console.log(number);
	}
	number ++; 
}