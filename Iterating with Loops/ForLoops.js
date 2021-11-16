//for loops Sequential 

for (var i = 0; i < 11; i++){
    console.log(i + " Yes");
}

var array = [3,4,5,6,7,8,9,2,3,1,44,3,2,333,4,5,643,5,43,2];

//bubble sort using JavaScript
var swapped = false;

do{
    swapped = false;
    for (var i = 1; i <= array.length; i++){
        if(array[i - 1] > array[i]){
            let temp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = temp;
            swapped = true;
        }
    }
} while(swapped);
console.log(array);

//Output
// [
//     1, 2,  2,  2,   3,   3, 3,
//     4, 4,  5,  5,   5,   6, 7,
//     8, 9, 43, 44, 333, 643
// ]

//For loops : Enumerative

var arrayList = [
    "Home",
    "WebPage",
    "Contact us",
    "About us",
    "JavaScript",
    "News",
    "Blog"
];

for (var i in arrayList) {
    console.log(i, arrayList[i] , i + 1);
}

var arrayObject = {
    first : "Home",
    second : "WebPage",
    third : "Contact us",
    fourth : "About us",
    fifth : "JavaScript",
    sixth : "News",
    seventh :"Blog"
};
console.log("---------------------------------");
for (const key in arrayObject) {
    if (Object.hasOwnProperty.call(arrayObject, key)) {
        const element = arrayObject[key];
        console.log(key, arrayObject[key]);
        
    }
}