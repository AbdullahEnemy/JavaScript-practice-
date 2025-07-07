//js object is an entity having state and behavior (properties and methods)
//js objects has speacil property called prototye.
//prototype is it self an object having speacil behavior

const student={
    fullName:"Abdullah Fayyz",
    marks:90,
    printMarks:function(){
        console.log(this.marks);
    },
}
console.log(student.fullName);
console.log(student.marks);
student.printMarks();
let arr=["apple","banana","mango"];
console.log(typeof(arr));//=>object
const employee={
    calTax(){
         console.log("tax rate is 10%");
        tax=this.salary* 0.1;
         console.log("tax = ",tax);
    }
}
const karanArjun={
    salary:90000,

}
//__proto__ is used to make prototype
karanArjun.__proto__=employee;
console.log(karanArjun);
karanArjun.calTax()
const karanArjun2={
    salary:90000,
        calTax(){
         console.log("tax rate is 20%");
        tax=this.salary* 0.2;
         console.log("tax = ",tax);
    }
}

karanArjun2.__proto__=employee;
console.log(karanArjun2);
karanArjun2.calTax()

//if an object and prototype has same method then the method of object is used.