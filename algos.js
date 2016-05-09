//return array[index];
var words = ["eat", "sleep", "code"]; 
// use .length to compare each word in array then print the longest
if (words[0].length > words[1].length && words[0].length > words[2].length) {
	console.log("the longest word is " + words[0]);
} else if (words[1].length > words[0].length && words[1].length > words[2].length) {
	console.log("the longest word is " + words[1]);
} else {
	console.log("the longest word is " + words[2]);
}
//compare for arrays with more or less than 3 elements