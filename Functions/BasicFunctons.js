function speak(){
    console.log('Arf');
	console.log('Woof');
	console.log('Meow');
	console.log('Moooooooooooo');
}

speak();

function add(a,b){
    return a + b;
}

console.log(add(5,10));



function fuddify(speech) {
    // if it's not a string, return an error message
    if (typeof speech !== "string") {
      console.error("Nice twy, wabbit!");
      return;
    }
  
    // otherwise, make it sound like Elmer Fudd
    speech = speech.replace(/r/g, "w");
    speech = speech.replace(/R/g, "W");
  
    return speech;
}
console.log(fuddify("Be very quiet, I'm hunting rabbits."));

console.log(fuddify("You screwy rabbit."));
console.log(fuddify("Rabbit tracks!"));
  
var utterance = fuddify("You screwy rabbit");
utterance;
  
function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

fuddify("Be very quiet, I'm hunting rabbits.");
fuddify("You screwy rabbit.");
fuddify("Rabbit tracks!");

function speakSomething(what, howMany){
    if(typeof howMany !== "number"){
        console.log("Write number howMany");
        return;
    }

    if(howMany < 0){
        console.log("Negative number not included");
        return;
    }

    var i = 1
    do{
        console.log(what + " (" + i + ")");
        i++;
    }while(i <= howMany);
    return;
}

speakSomething("yes", 10);// returns "yes" 10 times
speakSomething("yes", 'ten');//returns write number howMany
speakSomething("yes", -10);//returns negative number not included

function addingMachine() {
    // initialize the total we'll be returning
    var total = 0;
  
    for (var i = 0; i < arguments.length; i += 1) {
      // grab the next number
      var number = arguments[i];
  
      // check if the argument is a number.
      // if so, add it to the running total
      if (typeof number === "number") {
        total += number;
      }
    }
  
    // done - return the total
    return total;
}
console.log(addingMachine(1, 2, 3));

console.log(addingMachine(1, 2, 3, 4, 5, 6, 7, 8, 9, 1204910249014));