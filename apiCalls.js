//fetch api provides an interface for fetching resources
//it uses request and response objects.
//the fetch() method is used to fetch a resourse (data )
//api->Application programming interface
const apiKey="ec6a4719ec15c362c2c12b6d90ee1f57";
let countryCode="PK";
let limit=5;
let cityName="Lahore";
let url=`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=${limit}&appid=${apiKey}`
let h1=document.querySelector("h1");
const getLatitude=async()=>{
   
const result= await fetch(url);
const data=await result.json();
    const { lat, lon } = data[0];
    console.log(data)
    h1.innerText=`Latitude: ${lat}, Longitude: ${lon}`;
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
};getLatitude();


