// Q-1.  Print numbers from array who are odd by using while loop:

var array=[23,56,78,99,322,456,678,877];
var j = 0;
while (j < array.length) {
    if (array[j] % 2 != 0) {
        console.log(array[j]);
      }
      j++;
}

//Q-2. Print all except target:

var array = [9,11,13,18,1809,2000];
var target = 18;

var j = 0;
while(j < array.length) {
  if(array[j]!= target) {
console.log(array[j]);
  }
  j++;
}

var array = [9,21,100,1000,2000,5000];
var target1 = 2000;
var target2 = 9;

var j = 0;
while(j < array.length) {
  if(array[j]!= target1 && array[j] != target2) {
console.log(array[j]);
  }
  j++;
}
