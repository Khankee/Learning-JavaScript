//Global scope and local scope
//Global scopes accessed anywhere from the code such as

a = 10;

//local scope is acceessible only in local file
// use var to define the varibale only local scope

var aNum = 10;

function doubleIt(number){
    return (number *= 2);
}

var myNumbers = [1,2,3,4,5,6];

var myDoubles = myNumbers.map(doubleIt);

myNumbers.forEach(function(number){
    console.log("my array contains ", number);
}); 

doubleIt = number => (number *= 2);