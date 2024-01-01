// introduction of datatypes
console.log("***************** NUMBER****************")
let  age =24;
let price =99.4;
console.log(age)
console.log(price)
console.log(typeof age)//typeof(varibale name)--- used for identify the data and tells to user which type odf data type
console.log(typeof price)
console.log("******************************************")

console.log("******************BOOLEAN*****************")
isfollow=true
iscorrect=false
console.log(isfollow)
console.log(iscorrect)
console.log(typeof isfollow)
console.log(typeof iscorrect)
console.log("******************************************")

console.log("****************STRING*******************")
let firstName="suman"
let secondName="sourav"
console.log(firstName)
console.log(secondName)
console.log(typeof firstName)
console.log(typeof secondName)
console.log("*****************************************")

console.log("***************UNDEFINED******************")
let x;
let y;
console.log(x)
console.log(y)
console.log(typeof x)
console.log(typeof y)
console.log("**********************************************")

console.log("*********************NULL******************")
 let z=null
 let p=null
 console.log(z)
 console.log(p)
 console.log(typeof p)
 console.log(typeof z)

 console.log("***********************BigInt*****************")
 let q=BigInt("123456")
 console.log(q)
 console.log("************************************************")


 console.log("*******************SYMBOL************************")
 let r= Symbol("hello")
 console.log(r)
 console.log("***************************************************")

 console.log("***********************NON-PRIMITIVE*****************")

 console.log("************************OBJECT**********************")
 
 const Student={
    Name: "SumanSourav",
    branch:"CSE",
    regno:2102179,
    CGPA:9.4,
    ispass:true,
 };
 console.log(Student)
 console.log(typeof Student)
 // we can also acess thhe each daatatype
 console.log(Student["Name"])
 console.log(Student.Name)
 console.log(Student["CGPA"])
 console.log(Student.CGPA)
 console.log(Student["branch"])
 console.log(Student["regno"])
 console.log(Student["ispass"])

 // we can change the value of object
 Student["Name"]="SAPNA SHARMA"
 Student["CGPA"]=9.7
 Student["branch"]="optimstric"
 console.log(Student)
 //we can also known the object type of datatypes
 console.log(typeof Student["Name"]) 
console.log("*********************************************")
