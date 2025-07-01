//String initialization
//strings are immutable in js
let str='Abdullah'; 
let str2="Fayyaz";
console.log(str);
//string length
console.log(str.length);
//string index
console.log(str[2]);
//template literals
let str3=`This is a template literal`;
console.log(str3);
let obj={
    item:"Pen",
    price:50
}
let output=`the cost of ${obj.item} id ${obj.price} Dollars`;
console.log(output);
let str4=str+" "+str2;
console.log(str4);
//line break 
let str5="Abdullah \nenemy";
console.log(str5);
//\t len =1 not 2
let str6="n\tm";
console.log(str6.length);
//string methods
//toUpperCase
console.log(str.toUpperCase());
//toLowerCase
console.log(str.toLowerCase());
str6[0]='a';
//strings in js are immutable cant be change we always have to make a new str for new
console.log(str6);
//To "change" a string, you must create a new one:
let str7 = "Hello";
let newStr = "Y" + str7.slice(1);  // "Yello"
console.log(newStr); 