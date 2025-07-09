//async>>promise chains>>callBack hell
//synchronus ->code runs in an order
console.log("One");
console.log("two");
//asynchronus->allows you to execute the next instructions immediatley and does not block the flow
 function hello(){
    console.log("hello");
 }
 console.log("Hello will be printed after 2 sec");
 setTimeout(hello,2000);
 console.log("three");
 //callback a fuction that is passed as an argument is called callback
 const sum=(a,b)=>{
    return a+b;
 }
 function calculator(a,b,callbackSum){
    return callbackSum(a,b);
 }
 let results=calculator(10,30,sum);
 console.log(results);
 //callback hell->nested callbacks stacked below one another forimg a pyramid structure(pyramid of doom)
 //its become dificult to underdstand
 //callback hell---->
 function getData(id,getNextData){
    setTimeout(()=>{ console.log("data",id);
        if(getNextData)
        getNextData();
    },2000);
 }
getData(1,()=>{getData(2,()=>{getData(3)})});
