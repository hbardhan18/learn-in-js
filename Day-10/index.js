// Q-1.  Print numbers from array who are odd bu using while loop:
var array=[23,56,78,99,322,456,678,877];
var j = 0;
while (j < array.length) {
    if (array[j] % 2 != 0) {
        console.log(array[j]);
      }
      j++;
}