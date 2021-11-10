var myNotEmptyOgject = {
    'label1': 'value',
    'label2': 'value2'
};//object

console.log(myNotEmptyOgject);

var myFriend1 = {
    height: 178,
    weight: 85,
    age: 20,
    name: "John"
};//object

myFriend1.sex = "Male";
console.log(myFriend1);

delete myFriend1.age;
console.log(myFriend1);

var animal = {
	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky',
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false
};

var animal2 = animal;

animal2.noisy = false;

console.log(animal);

animal2 = JSON.parse(JSON.stringify(animal));

animal2.noisy = false;
animal2.deadly = false;
animal2.maxOffspring = 10;

console.log(animal2);