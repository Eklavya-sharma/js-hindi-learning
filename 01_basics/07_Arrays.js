console.log("======================ARRAYS======================")
let heroes = ["ironman","hulk","captinamerica","thor"];
let marks = [98,97,96,95,94];
let info = ["rahul",86,"delhi"];
console.log(heroes)
console.log(heroes.length)
console.log("======================================================")
console.log(marks)
console.log(marks.length)
console.log("=====================================================")
console.log(info)
console.log(info.length)

console.log("==============================================")

console.log("====================ArraysIndicies==============================")

let score = [98,99,100,45,76,87,63];
console.log("score [0] =",score[0])

score[0]=66
console.log(score);
console.log("score [0]=",score[0])
// arrays are mutable
console.log("==================================================================")

console.log("========================looping over an arrray ==============================")

let indheroes = ["Chandar Shekhar Azad","Saheed Baghat Singh","Shivaram Rajguru","Sukhdev Thapar","Indian Army"]
for(let i=0; i < indheroes.length; i++ )
{
    console.log(indheroes[i])
}
console.log("=================================================================================================")

let cities = ["delhi","jharkhand","kerla","nangoli","karnatka"]
for(let city of cities)
{
    console.log(city);

    console.log(city.toUpperCase())
}
console.log("==============================================================================")

console.log("======================================ARRAYS-IN-METHOD=========================================")

console.log("================================PUSH()-METHOD-add to end ============================================")

let grade = [96,67,98,76,93,49]
console.log("before push =",grade)
grade.push(101,203,902);
console.log("after push =",grade)
console.log("===================================POP()-METHOD-DELETE-END=======================================")
let FoodItems = ["potato","apple","litch","tomato"];
console.log("Before pop Food Items =",FoodItems)
console.log(FoodItems.pop())
console.log("food items aftyer pop",FoodItems)

console.log("==========================CONVERT ARRAYS TO STRING=========================================")

let numbers = [1,4,7,8,9,3,2];
console.log(numbers.toString());

const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());

console.log("==========================CONCAT() joins multiplies arrays and return something======================================")
 
let marvelheroes = ["thor","spiderman","ironman","hulk"]

let dcheroes = ["superman","aquaman","batman"]

let superpowers = marvelheroes.concat(dcheroes)

console.log(superpowers)

console.log("==========================UNSHIFT() adding at start================================")
//marvelheroes.unshift("antman")
console.log(marvelheroes)

console.log("=========================shift() deleted 1st item ==================================")
//marvelheroes.shift();
//console.log(marvelheroes);
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel
console.log("================================SPLICE(add,remove,replaced) returns a pices of array======================================")

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

console.log("====================SLICE(startindex,endindex)================================")
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]




