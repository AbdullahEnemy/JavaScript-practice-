console.log("ok")
//comments(single line)
/*
multiline
*/ 
let a=5;
let b=10;
console.log("a+b = ", a+b);
console.log("a-b = ", a-b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b);
console.log("a^b = ", a**b);
a++;
console.log("a inrement = ", a);
a--;
console.log("a decrement= ", a);
a+=1;
console.log("a+=1 ", a);
a-=1;
console.log("a-=1 ", a);
a*=8;
console.log("a*=8 ", a);
a/=2;
console.log("a/=2 ", a);
a**=2;
console.log("a**=2 ", a);
a=5;
b='5';
console.log(a==b)
console.log(a===b)
let age =2;
if(age>=18)
console.log("you can vote");
else
console.log("you can't vote");
let mode = "dark";
let color;
if(mode==="dark"){
    color="black"
}
else
{
    color="white";
}
console.log(color);
if(age<18)
{
    console.log("Junior");
}
else if(age>60)
{
    console.log("Senior");
}
else{
    console.log("Middel");
}
result=(age >18)?"adult":"not adult";
console.log(result);
switch(mode){
    case"dark":
    console.log("black");
    break;
    case"light":
    console.log("White");
}
//let number=prompt("Enter any number");
//console.log(number);
number=50;
if(number%5===0)
{
    console.log("it is a multiple of 5");
}
else{
    console.log("it is not a multiple of 5");
}
let score=prompt("Enter your Marks");
console.log(score);
if(score>=80 && score<=100){
    console.log("Grade : A")
}
else if(score>=70 && score<=79)
    {
    console.log("Grade : B")
}
else if(score>=60 && score<=69)
    {
    console.log("Grade : C")
}
else if(score>=50 && score<=59)
    {
    console.log("Grade : D")
}
else{
    console.log("Grade : F")
}