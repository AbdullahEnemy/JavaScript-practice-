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
let arr=[1,2,3,4,5];
function display(num){
    console.log(num);
}
arr.forEach((val,idx,arr)=>{console.log(val**2,idx,arr)});
arr.forEach(display);