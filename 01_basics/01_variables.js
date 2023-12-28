
const accountId = 1234;//constant
let accountEmail = "sumansourav9359@gamil.com"// local block scope variables
var accountPassword = "43321"//it is global variables
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