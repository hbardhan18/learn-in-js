// Palindrome -left word and  right word are same.
// ex- madam.

// check whether palindrome or not.

//var word = "hansh";
// H A N S H
// 0 1  2 3 4
   // 0 = 4, 1 =3 ;
   // Length = 5 
   // 5 - 1 = 4, 4 /2 = 2;

var word = "carrot";
function checkPalindrome(word) {
    for (let j = 0; j < Math.floor((word.length- 1) / 2); j++) {
        if (word[j] !== word[word.length -1 - j]) {
            return  word + "is not palindrome";
}
 }
 return  word + " is palindrome";
}
 console.log(checkPalindrome(word));

 var word = "hansh";
function Palindrome(word) {
    for (let q = 0; q < Math.floor((word.length - 1) / 2); q++) {
        if (word[q] !== word[word.length -1 - q]) {
            return word + " is not palindrome";
}
 }
 return word + " is palindrome";
}
 console.log(Palindrome(word));

 var word = "madam";
function Palindrome(word) {
    for (let q = 0; q < Math.floor((word.length-1 )/ 2); q++) {
        if (word[q] !== word[word.length -1 - q]) {
            return word + " is not palindrome";
}
 }
 return word + " is palindrome";
}
 console.log(Palindrome(word));


 