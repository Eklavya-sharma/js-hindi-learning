console.log("=========================STRINGS=======================")
console.log("====================== str.UpperCase()==================")
let str = "apnacollege"
str.toUpperCase();
console.log(str)
//output==>apnacollege (NOTE==>"string doesnot change orignal string")

let newstr = str.toUpperCase();
console.log(newstr)// (NOTE==> strings are immutable )

console.log("========================================================")

console.log("==================str.slice(start,end)====================")

let str1 ="HELLO"
console.log(str1.slice(1,3))
console.log(str1.slice(0,3))

console.log("==========================================================")

console.log("=================str.concat================================")

let str2 = "APNA"
let str3 = " COLLEGE"

let res =str2.concat(str3);// its join two string
console.log(res)

console.log("==============================================================")

console.log("===============================str.replace(searchval,newval========================")

let str4 = "hello"
console.log(str4.replace("h","y"));

let str5 ="hello"
console.log(str5.replace("lo","p"))

console.log("=====================================================================================")

console.log("===================str.charAt(idx)=============================================")

let str6 = "ILOVEJS";

console.log(str6.charAt(1))

console.log("=================================================================================")






