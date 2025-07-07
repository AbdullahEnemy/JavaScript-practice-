//class is a program code template for creating objects
//so class is a blueprint
//constructor is a specail method that is automatically invoked when an object is formed to initialize an object;

class car{
    constructor(brand){
        this.brandName=brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName=brand;
    }
}
let fortuner=new car();
console.log(typeof(fortuner));
fortuner.start();
fortuner.stop();
fortuner.setBrand("toyota");
console.log(fortuner.brandName);
let gtr=new car("Nissan");
console.log(gtr.brandName);
//inheritance is passing down properties & methods from parents class to child class
class parent{
    hello()
    {
        console.log("hello");
    }
}
class child extends parent{

}
let obj=new child();
obj.hello();
class person{
    constructor(name){
        this.name=name;
    }
    Eat(){
        console.log("Eat food");
    }
    sleep(){
        console.log("Sleep");
    }
}
class engineer extends person{
    constructor(branch,name){
        super(name);
        this.branch=branch;
    }
    work(){
        //super should be used to call parents functions else error will be displayed
        super.Eat();

        console.log("Working");
    }
    sleep(){
        console.log("Engineer sleeping");
    }
}
//if a child and parent have a same function then the childs function will overrides the parents function
let abdullah=new engineer("Software Engineer","Abdullah Fayyaz");
abdullah.work();
abdullah.sleep();
abdullah.Eat();
console.log(abdullah.name);
//super keyword is used to call the constrctor of its parent class to access the parents properties and mehtods
//when ever we have to make a constructor in child so first we have to envoke parents constructor with super()
//practice questions
let Data="Enemy is here";
class user{
    email;
    name;
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    displayInfo()
    {
        console.log(`UserName : ${this.name}`);
        console.log(`UserEmail : ${this.email}`);
    }
    displayData()
    {
        console.log(`WebsiteData : ${Data}`);
    }

}
let newUser=new user("Enemy","Enemy@gmail.com");
newUser.displayData();
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(data){
        Data=data;
        console.log("Data Edited Successfully")
    }
}
let admin =new Admin("admin","admin@gmail.com");
admin.displayInfo();
admin.editData("Admin on the duty");
newUser.displayData();

