function Animal(name){
    this.name = name;
}
Animal.prototype.printName = function(){
    console.log(this.name);
    
}
var obj = new Animal('Emran Hamed');
obj.printName();
//........
var Person = function(name,age){
    this.name = name;
    this.age = age;
}
var p1 = new Person('Emran',20);
p1