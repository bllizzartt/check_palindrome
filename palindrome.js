// problem 1: check to see if aabaa is a palindrome and the solution should be "true"

// define a Let variable
let inputString = "aabaa"
// initiate a function
function palindrome(inputString) {
    // remember, "==" means it is anoperator that checks whether its two operands are equal, returning a Boolean result
    // .split The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
    // .reverse The reverse() method reverses the order of the elements in an array. It also overwrites the original array.
    // .join The join() method returns an array as a string. Also, it does not change the original array.

    // create a return for inputString
    return inputString == inputString.split('').reverse().join('');

}

let palindromeCheck = palindrome(inputString);
console.log(palindromeCheck);



// problem 2: check to see if aabaa is a palindrome and the solution should be "false"

// define a let variable 
let inputString1 = "abac"
// initiate a function
function palindrome2(inputString1) {
    // remember, "==" means it is anoperator that checks whether its two operands are equal, returning a Boolean result
    // .split The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
    // .reverse The reverse() method reverses the order of the elements in an array. It also overwrites the original array.
    // .join The join() method returns an array as a string. Also, it does not change the original array.

    // create a return for inputString1
    return inputString1 == inputString1.split('').reverse().join('');

} 

let palindromeCheck2 = palindrome2(inputString1);
console.log(palindromeCheck2);



// problem 3: check to see if aabaa is a palindrome and the solution should be "true"

// define let variable 
let inputString2 = "a"
// initiate a function
function palindrome3(inputString2) {
    // remember, "==" means it is anoperator that checks whether its two operands are equal, returning a Boolean result
    // .split The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
    // .reverse The reverse() method reverses the order of the elements in an array. It also overwrites the original array.
    // .join The join() method returns an array as a string. Also, it does not change the original array.

    // create a return for inputString2
    return inputString2 == inputString2.split('').reverse().join('');
}

let palindromeCheck3 = palindrome3(inputString2);
console.log(palindromeCheck3);