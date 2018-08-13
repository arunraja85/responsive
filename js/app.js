console.log("Welcome Arun to Java Script");

let name = "Arunraja Jayavel";
console.log("name "+ name);
console.log(typeof(name));
name = 1234;
console.log("name "+ name);
console.log(typeof(name));
name = true;
console.log("name "+ name);
console.log(typeof(name));
var array = [1,"Arunraja",true];
console.log(array);
console.log(typeof(array));
var employee = {id:1,name:"Arunraja"}
console.log(employee);
console.log(typeof(employee));

class student{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}

var stud = new student(1, "Arunraja");
console.log(stud);
console.log(typeof(stud));
console.log(stud.name);


var num1 = 100;
var num2 =100;
console.log(num1==num2);
var num3 = 100;
var num4 = '100';
console.log(num3==num4);
console.log(num3===num4);

let notes = [
    {
        id:1,
        title:"Name",
        isPinned:true
    }, {
        id:2,
        title:"Name1",
        isPinned:true
    }, {
        id:3,
        title:"Name2",
        isPinned:true
    }

]

const everyResult = notes.every(note => {
    return  note.isPinned === true;
    
}); 

console.log("every test", everyResult);

notes.sort((n1,n2)=> {
    return n1.isPinned == n2.isPinned ? 0 : n1.isPinned ? -1 : 1;
});

let num5 = `${num1}`;
console.log(num5);
