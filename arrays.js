//Arrays are collection of items
//arrays ar,e types of objects
//arrays also have key vlaue pair but key are the indexies
let marks=[85,97,44,37,76,60];
console.log(marks);
//sorting//for of is prefred 
for(let i=0;i<marks.length;i++)
{
    for(let j=i;j<marks.length;j++)
    {
        if(marks[i]>marks[j]){
            let swap=marks[i];
            marks[i]=marks[j];
            marks[j]=swap;
        }
    }
}
console.log(marks);
//looping over arrays
let names=["enemy","joker","abdullah","zain"];
for(let name of names )
{
    console.log(name);
}
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
//practice question
//Question # 1
let sum=0;
let average =0;
for (let mark of marks){
    sum+=mark;
}
average=sum/marks.length;
console.log("Average Marks : ",average);
//Question # 2
let prices=[250,645,300,900,50];
let idx=0;
for(let price of prices){
    prices[idx]=price-(price*(0.1));
    idx++;
}
console.log(prices); 
//Array Methods
//push to add something at end
let foodItems=["potato","apple","litchi","tomato"];
let fastFood=["Burger","fries","pizza"];
foodItems.push("chips");
console.log(foodItems);
let delValue=foodItems.pop();
console.log(foodItems);
console.log(delValue);
//to convert an array to a string
console.log(foodItems.toString());
//concat join multiple arrays and return a new array
let allItems=foodItems.concat(fastFood);
console.log(allItems);
//unshift to add any element in the start
fastFood.unshift("wings");
console.log(fastFood);
//shift delete from start
fastFood.shift();
console.log(fastFood);
//slice returns a slice 
let sliceOfItems=allItems.slice(1,4);
console.log(sliceOfItems);
//splice changes orignal array(add,remove,replace)(startidx,delcount,newelement)
let num=[1,2,3,4,5,6];
num.splice(1,2,101,102,103);
console.log(num);
//add new elements after some index
num.splice(1,0,10);
console.log(num);
//to delete an element
num.splice(0,1)
console.log(num);
//to replace
num.splice(0,1,1);
console.log(num);
//practice Question
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//remove first company
companies.shift();
console.log(companies);
//remove uber and add ola in tis place
companies.splice(1,1,"Ola");
console.log(companies);
//Add Amazon at end
companies.push("Amazon");
console.log(companies);