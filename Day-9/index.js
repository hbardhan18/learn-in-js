//2. while loop

// syntax:
// starting
// while(ending){
// code
 // sequence ;
// }


// Q-1. Print numbers from 1 - 10 by using while loop.


var j = 1;
while(j < 11) {
    console.log(j);
    j++;
}


// Q-2. Print numbers from 10 - 1 by using while loop.



var j = 10;
while(j > 0) {
j--;
console.log(j);
}
 


// Q-3.Print count from given array who  numbers are even, using while loop.



var array = [1,2,3,4,5,6,9,18]
 // print only numbers from array;
// then  even  CSSCondition;
 // then calculate count;
 
 var j = 0;
 var count = 0;
 while(j < array.length) {
/// console.log(array[j]);
if(array[j] % 2 == 0) {
// console.log(array[j]);
count++;
}
j++;
 }
 console.log(count, "count");



 // Not operator. !
//left side is equal to right side .
// left side is not equal to  right side.

console.log(1 ==2);
console.log(1 !== 2);
console.log(1 !== "1");
var number = 2
console.log(number % 2!= 0);