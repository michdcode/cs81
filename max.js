function max (x, y, z) {
    var biggestNum = 0;
    if (x > y) {
    	biggestNum = x;
    } else {
    	biggestNum = y;
    }
    if (z > biggestNum)
    	biggestNum = z;
    return biggestNum;
}