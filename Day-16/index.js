// Fetch
// Localstorage
// setimeout
// event loop


// settimeout

// syntax:
//settimeout(a Function, Time)

// Q. Print numbers from 1-11, after 3 sec of exceution.

 function ExecuteDataAfterSomeTime() {
     for(j = 1 ; j < 11; j++) {
   console.log(j) ; 
    }
 }
ExecuteDataAfterSomeTime();


setTimeout(() => {
console.log("Hello from set timeout");
 } ,5000 );// 5 sec = 5000


// Setinterval(handle a function , time)

// ctrl + c => To stop file execution.

//
setInterval(() => {
    console.log("Hello from set Interval");
   } , 4000);


  // ClearInterval


  let count = 0; 
// 5 = stop interval
  const id = setInterval(() => { 
count++;  // 1 ,2, 3, 4, 5, 6
console.log(count); // 1, 2, 3, 4, 5, 6
if(count > 5) { // 1 > 5, 2 > 5, 3 > 5, 4 > 5, 5>5, 5>6
    console.log(id, "id")
    clearInterval(id);
    console.log("Interval cleared");
}
  } , 3000);


  // Localstorage;- specific time, permanent
// 1. To set data in localStorage
//localStorage.setItem("MyNumber" ,{count:10});

  //sesionstorage
  //cookie