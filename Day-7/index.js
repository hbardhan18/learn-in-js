// Loop
//.1 For loop
//.Q-1 Print numbers from 30 - 60, with range of 5.




for(let j = 30; j < 60; j +=  5) {
console.log(j);
}



//.Q-2 Print numbers from 50 - 100 , with the range of 3 and count them.



var count = 0
for(let j = 50 ; j <= 100 ; j += 3 ) {
count++;
console.log(count, "inside for loop block");
}
console.log(count, "outside for loop block");



// Q-3. Print numbers from 10 - 50 with the range of two and add 10 for every element and return in array.


// 10 + 10 = 20;
// 12 + 10 = 22;
// 14 + 10 = 24;
// ------------,
// 50 + 10 = 60;


// [20,22,24,26,28,30....50]:


var starting = 10;
var ending = 50;
var sequence = 2;
function PrintNumbers(starting, ending , sequence) {
    var output = [];
for (let j = starting ; j <= ending; j += sequence) {
   //  console.log(j + 10);
    output.push(j + 10);
} 
return output;
}
console.log(PrintNumbers(starting, ending, sequence));




// Q-4. Print count from range 233 to 456 ,who are odd.




var starting = 233;
var ending = 456;
var sequence = 1;

function CountOddNumbers(starting, ending, sequence) {
    var count = 0;
    for (var j = starting; j <= ending; j += sequence) {
        if( j % 2 == 1) {
            count++;
        }
    }
    return count;
}
console.log(CountOddNumbers(starting, ending, sequence));



