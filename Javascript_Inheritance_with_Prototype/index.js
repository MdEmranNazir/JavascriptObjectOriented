// function Person(){
//     this.name = 'Emran Hamed';
// }
// function Teacher(){
//     Person.call(this);
//     this.subject = 'Javascript';
// }
// var teacher = new Teacher();
// var name = teacher.name;
// console.log(name);

///...............///

function Person(name){
    this.name = name;
}
Person.prototype.printName = function(){
    console.log('Name:' + this.name);
    
}
Person.prototype.another = function(){
    console.log('Hello ,How are you?');
    
}
function Student(name,id){
    Person.call(this,name);
    this.id = id;
}
// Object.setPrototypeOf(Student.prototype,Person.prototype);
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var student = new Student('Abdullha_Nacher', 328345);
student;
student.printName();
student.another();
