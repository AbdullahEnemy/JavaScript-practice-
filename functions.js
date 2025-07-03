//Functions :  block of code that performs a specific task ,can be called when ever needed 
//function functionName(Parameters,....){work to do}
//functions save us from reduantance
//function parameter are like local veraible of function and have block fucntion
function myFunction(msg)
{
    console.log(msg);
}
function sum(x,y)
{
    return x+y;
}
let msg="Hello Enemy"
myFunction(msg);
console.log(sum(100,500));
//arrow function
//const functionName=(params,...)=>{function work}
const arrowSum=(x,y)=>{return x+y;};
const arrowMul=(x,y)=>{return x*y;};
console.log(arrowSum(10,85485));
console.log(arrowMul(50,4));
//Practice Question
function countVowel(str){
    let count=0;
    for(let i of str){
        if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
            count++;
            
        }
    }
    return count;
}
console.log(countVowel("abdullah Fayyaz"));
const arrowCountVowel=(str)=>{
        let count=0;
    for(let i of str){
        if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
            count++;
           
        }
    }
    return count;
}
console.log(arrowCountVowel("abdullah Fayyaz"));
//callback function is a function that is passed as an argument to another function
//for each (to exectute a function for each element of an array)
//higher order function are functions that take or return a function so foreach is a higher order fucction
//Practice Question
let arr=[1,2,3,4,5]
function display(num){
    console.log(num);
}
arr.forEach((val,idx,arr)=>{console.log(val**2,idx,arr)});
arr.forEach(display);
//map creates a new array with some operations on the array elements
let newArr=arr.map(val=>{return val*val})
console.log(newArr);
//filter create a new array of elements that give true for a condition
let evenArr=arr.filter((val=>{
    return (val%2===0)
}))
console.log(evenArr)
//performs some operations & return a single value
const output=arr.reduce((res,cur)=>{return res+cur});
console.log(output);
//practice question 
let studentMarks=[50,90,95,92,45,98,96,36,74,92,93];
let sArr=studentMarks.filter((val)=>{if(val>=90)
{return val};
})
console.log(sArr);
//let n=prompt("enter a number");
let n=10;
let numArr=[];
for(let i=1;i<=n;i++){
    numArr.push(i);
}
const sumofArr=numArr.reduce((res,cur)=>{return res+cur});
const productofArr=numArr.reduce((res,cur)=>{return res*cur});
console.log(sumofArr);
console.log(productofArr);
