//async fuctions always return a promise.
// //await pauses the execution of its surrounding async function until the promise is selted
//await can be only used inside a async fuction
 async  function hello(){

    console.log("hello");
 }
 function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ console.log("weather data");
        resolve("done");
    },5000)
    })
 }
 async function getWeatherData() {
    await api();
    console.log("weather data is here");

 }
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
async function getAllData() {
    await getData(2);
    await getData(3);
    getData(10);

}
getAllData();
//IIFE (immediatly invoked function expression)->this runs as soon as its defined we dont have to call this
(async function() {
    await getData(2);
    await getData(3);
    getData(10);

})();