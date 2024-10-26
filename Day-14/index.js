// Object.

// var myvariable = 18;
// var myarray = [09, 12, 18, 27, 2000];array.

// var myobject = {key: data, key2: data2 };
var mydata = {collegename: "Gayacollege", year: 2024, semster: { 1: 55} };
console.log(mydata, "mydata");

console.log(mydata.collegename, "mydata");

var myschool = new Object();
myschool.name = "manav bharti"
myschool.location = "kendui"
myschool["total students"] = 60;
console.log(myschool, "myschool");

var mydata = {name: "maa bageshwari"};
 mydata = "maa bageshwari college";
console.log(mydata, "mydata");


var mydata = {name: "hanshu", class: 12 };
console.log("class"  in mydata);
console.log("sem" in mydata);


var mydata = {student: "khushi", age: 17, class: 8};
delete mydata.class;
console.log(mydata);

var mydata = {student: "mohan", age: 35, class: 12};
for(var key in mydata) {
    console.log(key, mydata[key]);
}


var mycollege = {
    name: "jeevan",
     studentcount: function() {
console.log(12);
console.log(this.name);
 }
}
console.log(mycollege.studentcount());

var myfriend = {name:"bibek", age: 8, mystudents: { batch1: 10}};
console.log(myfriend.name);
const {name , age, mystudents} = myfriend;
 const { batch1 } = myfriend;
console.log(name, age, batch1);