// Linear search
// Binary search

// Q-1. Given an array and targrt find out index of target.//linear search

var array = [8,7,6,5,4,3,2,1];
var target= 3;
for(var j = 0 ; j < array.length; j++) {
//console.log(j);
// console.log(array[j]);
if(array[j]=== target) {
    console.log(j);
}
}


// Binary- ascending order/ shortest.
// using while loop
var array = [1,2,3,4,5,6];
var target = 5;
console.log(Math.floor((array.length-1) / 2));



var array = [1,2,3,4,5,6,7,8,9];
var target = 5;
var middleindec = Math.floor ((array.length-1) / 2);
console.log(middleindec,'middleindec')
console.log(array[middleindec],"array[middleindec]");

if (array[middleindec] === target) {
    console.log("target");
} else if(array[middleindec] < target) {
    console.log("target show in right side middle element");
} else if(array[middleindec] > target) {
    console.log("target show in left side of middle element");
}



