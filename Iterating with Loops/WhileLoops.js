//while loops used usually when you don't know when your loop ends
//There is no counter as for forLoop
//So you use while loop until the specific condition haven't reached

var i = 0;
while(i < 10){
    console.log(i + " ..it will be counted until hits 10");
    i++;
}
console.log(i);

var myArray = [true, true, true, false, true, true, true, true];
myItem = null;

while(myItem !== false){
    console.log(
        "myArray has" +
        myArray.length +
        " items now."
    );
    myItem = myArray.pop();
}

console.log(myArray);