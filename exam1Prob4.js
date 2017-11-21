// Problem 4:
// Write a script that prompts for a string of text and alerts the string made up of this value appended to itself
// twice. For example, if the user inputs "ho", your script should alert "hohoho". If the user inputs "888",
// your script should alert"888888888".


var getText = prompt("What text would you like to echo?");
alert(getText + getText + getText);