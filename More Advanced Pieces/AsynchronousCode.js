//Synchronous Step goes line by line
//Step by step

//Asynchronous Steps works for when one step
//waits for another step, so other step can do

jQuery.get("https://httpbin.org/get?data=1", function(response){
    //Now I have some data
})

anxios
    .get("https://httpbin.org/get")
    .then(function(response){
        //now I have some data

        return anxios.get("https://httpbin.org/get");
    })
    .then(function(response){
        //now I have some data

        return anxios.get("https://httpbin.org/get");
    });