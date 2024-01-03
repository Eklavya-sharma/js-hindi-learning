console.log("========== CONDITIONAL-STATEMENT=========== ")

console.log("=========== IF-STATEMENT===============")
console.log(" if statement means ===> if condition is true then statement is  executed")
let color;
let mode="dark-mode"
if(mode === "dark-mode")
{

    console.log("black")
}
console.log("===================================================================")

console.log("========================== IF-ELSE STATEMENT =================================")

let Age=57;
if(Age>=18)
{
    console.log(" adult ")
}
else
{
    console.log(" not adult ")
}
console.log("=====================================================================")

console.log("=================IF-ELIF-ELSE-STATEMENT==================================")
let marks = 85
if(85<= marks <=100)
{
    console.log(" grade == A")
}
else if(65<= marks <=85)
{
    console.log(" grade == B")
}
else if(35<= marks <= 65)
{
    console.log(" grade == C")
}
else
{
    console.log(" fail ")
}
console.log("============== LOOPS=================")

console.log("=================FOR-LOOPS=====================")
let size = 0
for( let i = 1; i < 6; i++)
{
    console.log(" my name is sapna sharma")
    size++
}
console.log(size)

console.log("===========================WHILE-LOOPS======================")

 let k=0
 while(k<= 10)
 {
    k++;
 }
 console.log(k)

 console.log("==============================================================")

console.log("===============DO-WHILE-LOOPS=========================")

let result = '';
let n = 0;

do {
  n = n + 1;
  result = result + n;
} while (n < 5);

console.log(result);
console.log("======================================================")

console.log("==================== FOR OF LOOPS IS GENRELLAY USED FOR STRING AND  ARRAY =======================")
let str = " APNA TIME AYEGA "
let len =0;
for(let i of str)
{
    console.log(i);
    len++;
}
console.log(" string len =", len)
console.log("===============================================================================================")

console.log("=================FOR-IN-LOOPS============================")
let student = {
    name:" SAPNA SHARMA",
    age:20,
    cgpa:8.4,
    is_pass:true,
};
for(let key in student)
{
    console.log(key,student[key])
}
console.log("==========================================================================")



