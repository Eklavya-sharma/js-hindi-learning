
const accountId = 1234;//constant variable can't be re decalered or updated at block scope varables
let accountEmail = "sumansourav9359@gamil.com"// variables can't be redecalered & but we can update a block scope variable
var accountPassword = "43321"//variables caan be redecalered and updated a global scope variable
accountCity = "kota"// without create varalbe we can store something
let accountState;

// accountId = 2; not allowed because it is assign with constant variables
accountEmail="hc@gmail.com";
accountPassword = "98765"
accountCity = "pune"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


