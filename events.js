//event handling with js
let btn=document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    console.log("button pressed");
    console.log(e.type);
})
let div=document.getElementById("container");
let a=0;
div.onmouseenter=()=>{
    a++;
console.log(a);
}
//onve an event is handeled it cant be done again if we do the event will be overwrites
//event object has the details of the  event
//event listners allow you to make muliple events
//practice Question
let body=document.body;
let modeChangeBtn=document.getElementById("changeMode");
let mode="light";
modeChangeBtn.addEventListener("click",()=>{
    if(mode==="light"){
    body.style.backgroundColor="black";
    body.style.color="white";
    modeChangeBtn.innerText="darkMode";
    mode="dark";
    }
    else{
            body.style.backgroundColor="White";
    body.style.color="Black";
    modeChangeBtn.innerText="LightMode";
    mode="light";
    }
})