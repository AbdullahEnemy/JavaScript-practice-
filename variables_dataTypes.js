console.log("enemy");
name="enemy";
NAME="Abdullah"//both are  not same as js is case sensitive lang
isfollow=true;

let _name ="Abdullah Fayyaz"
//let _name="enemy" gives error
var age =29;
//var age =29; gives no error
const price = 100;
//price =200;//gives error as const can not be updated
console.log(_name);
let a;
console.log(a);//undefine
var b;
console.log(b)//undefine
//const c;//gives error should be initialized
const student={
    FullName:"Abdullah fayyaz",
    age:22,
    gender:"male",
    dateofbirth:"12/6/2003"
}
console.log(student)
console.log(student["FullName"])
//or
console.log(student.age)
//practice question
const product={
    productName:"Ball pen",
    rating:7.2,
    price:100,
    isDeal:true,
    offer:5 
}
console.log(product)
const profile={
    title:"Abdullah Fayyaz",
    isFollow:false,
    isMessage:false,
    posts:120,
    followers:500000,
    following:4,
    name:"Abdullah Fayyaz",
    bio:"I am a passionate software developer"
}
console.log(profile)