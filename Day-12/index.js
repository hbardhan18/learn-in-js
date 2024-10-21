// binary search

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 10;
function binarysearch(array, target) {
var left = 0;
var right = array.length - 1;
while(left <= right) {
    console.log(left,"left", right, "right");
    const midindex =Math.floor((left + right) / 2);
    console.log(midindex, "midindex", array[midindex], "element");
    if(array[midindex] == target) {
        console.log(array[midindex], target, "array[midindex] == target");
        return midindex;
    } else if(array[midindex] > target) {
        console.log(array[midindex], target, "array[midindex] > target");
        right = midindex - 1;
    } else if(array[midindex] < target) {
        console.log(array[midindex], target,"array[midindex] < target");
left = midindex + 1;
    }
}
return "not found";
}
console.log(binarysearch(array, target));