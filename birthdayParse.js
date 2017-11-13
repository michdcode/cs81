// Find the people from the ancestry data set (textbook) who are didn't live past their 
// 40th birthday & who passed away after 1800. Download ancestry.jsView in a new window.
// Tip: Use the function filter() shown in Chapter 5 Eloquent JavaScript Textbook. 

var ancestryData = require("./ancestry.js");
var ancestry = JSON.parse(ancestryData);
var bday = function(arr){ 
  return arr.filter(function(val){ 
  return val.died > 1800 && (val.died - val.born < 40); 
  }) 
}; 
console.log(bday(ancestry));
