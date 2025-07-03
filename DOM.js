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
btn.addEventListener("click",()=>{
    elements.innerText="ok enemy helped you";
    
    console.log(elements.innerText);
})
let heading2=document.getElementById("heading2");
heading2.innerText=heading2.innerText+" Ok enemy thanks";

 