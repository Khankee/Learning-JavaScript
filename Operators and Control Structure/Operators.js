
//if statement same as Java
//but there is a diffarenece
//with tripple === equasions

var answer = true;

if (answer === true) {
    console.log("You said true!");
}
  
if (answer === true) {
    console.log("You said true!");
} else {
    console.log("You said something else");
}

if (answer === "YES") {
    console.log("You said YES!");
  } else if (answer === "MAYBE") {
    console.log("You said maybe. I don't know what to make of that."); // note the double primes
  } else if (answer === "NO") {
    console.log("You said no. :(");
  } else {
    console.log("You rebel, you!");
}

//Switch statement

switch(answer){
    case true:
        console.log("You Said YES (Swith)");
        break;
    case "NO":
        console.log("You Said NO (Switch)");
        break;
    default:
        console.log("No answer");
        break;
}

//Ternary operator
var sound =  "cat"

var animal = "cat" === sound ? "dog":"cat";

sound === "cat"
    ? console.log(1)
    : console.log(2);
console.log(animal);


  