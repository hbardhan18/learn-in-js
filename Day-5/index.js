// 20 / 2 = 10
// 20 % 2 = 0 ,1
// ----- 10 = quotient
// 2 / 20
//     20
//      0 - remainder
// if  number even then remainder is 0.
//if number is odd then number is 1.
// array [,,,,]
var students = [ "hanshu","suraj","bittu","sweta","last element", "hello", 9];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[5]);


//[] property calculates elements from 0.
console.log(students.length);
console.log(students.length-1);
console.log(students[students.length-1]);
console.log(students[Math.ceil(students.length / 2) -1]);

//length property calculates elements from 1.

console.log(Math.floor(10.5));//10
console.log(Math.ceil(10.5));//11
 

var array = [1,2,3,4,5];
array.push("eda");
console.log(array);
   



var array = [11,12,13,14];
array.pop("eda");
console.log(array);


var array = [21,22,23,24];
array.unshift();
console.log(array);



var array = [31,33,35,37];
array.shift("eda");
console.log(array);


var number = 50;
var target = 47;
function CHECKNUMBERISGREATERTHANTARGET(number, target) {
    if (target > number) {
        return "Target is greater than number";
    }
    console.log("after if condition true ");
    return "Number is greater than target";
} 
console.log(CHECKNUMBERISGREATERTHANTARGET(number,target));


var myage = 30;
var students = (myage,[2,4,6,8],"himanshu","lovely","raunk",18);
console.log(students);