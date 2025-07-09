//promise is for eventual completion of task.it is an object in js.
//its a solution to callback hell
//resolve || reject || pending
//resolve and reject are callbacks from js
let promise=new Promise((resolve,reject)=>
{
    console.log("i am promise");
    resolve("Promise Completed");
    //reject("Error promise not complete");
})
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("Success")
        if(getNextData)
        {
            getNextData();
        }
            
        },5000);

    })
}
let result=getData(1);

//.then $.catch
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        reject(8552);
    })
}
let pro=getPromise();
promise.then((res)=>{
    console.log("Promise Completed,Value :",res);
})
promise.catch((err)=>{
    console.log("Promise not Completed,Error :",err);
})
//promise chaining
function asyncfun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("some data");
            resolve("success");
        },5000);
        
    })

}
function asyncfun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("some data 2");
            resolve("success");
        },5000);
        
    })

}
console.log("fetching data 1");
    let p1 = asyncfun();
    p1.then((res)=>{
        console.log(res);
        console.log("fetching data 2");
        let p2 = asyncfun2();
         p2.then((res)=>{
            console.log(res);
        })
    })
   
getData(1).then((res)=>{
    console.log(res);
    return getData(2);
}).then((res)=>{
    console.log(res);
})