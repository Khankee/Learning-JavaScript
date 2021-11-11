var daysOfTheWeek = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
var numberArray = [1, 24, 26, 23, 28, 2, 3, 46, 5];

console.log(daysOfTheWeek.reverse());
console.log(numberArray.sort());

var monthArray = [
    'January',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

console.log(monthArray[0]);

monthArray.push("Month number 13")
//push - pushes at the end of the array

monthArray.pop();
//pop - deletes the last item

delete monthArray[3];
// delete - deletes the item but leave the empty item

monthArray[3] = "Arptil";

monthArray.splice(3,2);
//splice takes to parameters (array index) first param takes begining of the deleting array index
//                                         second param takes the length how many items need to delete
console.log(monthArray);

//ctrl + shift + p (Plugin Prettier works)