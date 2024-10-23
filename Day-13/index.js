// Nested for loop .

var array = [2, 3, 6, 7, 99 ,11 ,13 ,67];
var target = 13;
for(var j = 0; j < array.length; j++) {
for(var k = j+1; k < array.length; k++) {
if(array[j] + array[k] == target) {
    console.log(array[j], array[k]);
}
}
}


var array2 = [2, 3, 6, 7, 99 ,11 ,13 ,67];
var target2 = 6;
for(var j = 0; j < array2.length; j++) {
for(var k = j + 1; k < array2.length; k++) {
if(array2[j] * array2[k] == target2) {
    console.log(array2[j] +" * " + array2[k] , " = " , target2);
} else if(array2[j] * array2 == target2) {
console.log(array2[j] + " * " + array2[k], " = " , target2);
}
}
}
