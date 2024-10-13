//Reverse.
// Q-1.Print numbers  from 10-1.



for(j = 10; j >= 1; j--) {
    console.log(j);
}


// Q-2.Pint numbers fromn 45 - 25 who are even.



// for loop use : repeat

for(j=45; j >= 25; j--) {
     if(j % 2 == 0) {
console.log(j);
     }
}



// Q-3. Print elements from array.




var mynumbers= ["hanshu","18", "h", "false"];
console.log(mynumbers[0]);
console.log(mynumbers[1]);
console.log(mynumbers[2]);
console.log(mynumbers.length);


for(j = 0; j < mynumbers.length; j++) { 
    console.log(mynumbers[j]);
}



// Q-4.Print count of odd numbers from array.
var array =[25,48,67,88,98];

var count = 0;
for(j = 0; j < array.length; j++) {
    if(array[j] % 2 == 1) {
        count++
    }
}
console.log(count);