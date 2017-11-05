function range (start, end) {
	var arr = [];
	while(start < end + 1){
		arr.push(start);
		start++;
	}
	return arr;
}



function sum (arr) {
	total = 0;
	while(arr.length > 0){
		total = total + arr.pop();
	}
	return total; 
}
