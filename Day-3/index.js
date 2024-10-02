// conditional statements:
//1.if else
//2.switch
//logical operator:
//there are two types of logical operator;
//1.And operator(&&) ,//2.or operator
 // its returns single output with multiple conditions.
 console.log(2>1,2>1);// true
 console.log(4<5)// true
 //when all condtions are true  then it will be return true.
 //if single/double/multiple condition is false then it will be return false.
 console.log(2<1 && 2<3 && 3<4 && 4>5);
console.log(2<1|| 2<3 ||4>5 );
//if single/double/multiple condition are true then it will be  return true.
//when all condition are false then only it will be  return false.
// driving licence
//18= learning licence
//18 > dl and< 50 
//18 < no dl  
var age=40;//input element
if (age==18) { 
    console.log("this age is non-tranport driver")
} else if (51 >18 && age < 50) {
    console.log("this age is tranport driver")
} else { 
    console.log("this age is only withoutgear")
}

//switch(key) {
//case value:
//console.log() break;
//break;
//default:
//break;
//}
var honda="cd 100";
switch (honda){
    case "shine 125cc":
        break;
    console.log("best  top mode in iv");
    case " shine 120cc":
        break;
        console.log("engine quality is ,less in vi");
        case "unicorn 130cc":
            console.log("vi bike is not sucessful");
            break;
            case "cd 100":
                console.log("this bike is sucessful");
                break;
                default:
                    console.log("other honda model are not available");
}
