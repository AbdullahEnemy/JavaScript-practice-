//<style> tag is used to connect HTML with CSS</style>
//<script>Tag is used to connect HTML with JS</script>
 //window object an open window in th ebrowser .it is broswers object not js & is automatically created by the browser
 //it is global object with lots of properties and methods
 //DOM(document object model)==>
console.log(window.document.body);
 //DOM Manupilation 
 let heading =document.getElementById("heading");
 let ok=document.getElementsByClassName("ok");
 let h1=document.getElementsByTagName("h1")
 //Querry Selector
 //for class .classname
 // for id #id
 //tags tagname
 let elements=document.querySelector("p");
 let allparas=document.querySelectorAll("p");
console.log(elements.innerText);
let btn=document.getElementById("btn");
let heading2=document.getElementById("heading2");
heading2.innerText=heading2.innerText+" Ok enemy thanks";

let div=document.getElementById("box");
let id=div.getAttribute("id");
div.setAttribute("class","box")
console.log(div);
console.log(div.style);
let countr=0;
let countl=0;
let right=document.getElementById("right");
let left=document.getElementById("left");
let btn2=document.getElementById("btn2");
btn.addEventListener("click",()=>{
    countr++;
right.innerText = `right : ${countr}  `.padEnd(10, ' ');

div.style.backgroundColor="green";

})
btn2.addEventListener("click",()=>{
    countl++;
left.innerText=`left : ${countl}`;
div.style.backgroundColor="purple";

})
//adding new element 
let newBtn=document.createElement("button");
newBtn.innerText="clickMe!"; 
let divv=document.getElementById("divv");
//add to end
divv.append(newBtn);
//add to start
divv.prepend(newBtn)
//before 
divv.before(newBtn);
//after
divv.after(newBtn)
//delete
newBtn.remove();