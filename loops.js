//for
for(let i=0;i<5;i++){
    console.log("ENEMY : ",i)
}
let i=1;
let sum=0;
while(i<=5){
    sum=sum+i;
    i++;
}
console.log("sum : ",sum);
let j=0;
do{
     console.log("ENEMY : ",j);
     j++;
}while(j<=5);
let name="Abdullah Fayyaz";
for(let char of name){
console.log(char);
}
let student={
    name:"Abdullah Fayyaz",
    Age:22,
    section:"8-A"
}
for(let key in student)
{
    console.log(student[key])
}
//Practice Questions
for(let i=0;i<=100;i++)
{
    if(i%2==0)
        console.log(i)
}
let gameNumber="5";
let guess=prompt("Guess A number");
for(let i=0;guess!==gameNumber;i++)
{
    guess=prompt("Wrong Guess,try again");

}
console.log("Congratulations you won")