function letterCounter (str, ltr) {
	var counter = 0; 
	for (var i = 0; i < str.length; i++) {
		if (str[i] == ltr) {
			counter ++; 
		}
	};
	return counter;
}