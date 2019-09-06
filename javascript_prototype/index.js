// function person(name,age){
//     this.name = name;
//     this.age = age;
//     this.hello = function(){
//         console.log('Hello' + this.name);
        
//     }
// }
// var p1 = new person('EmranNazir',19);
// var p2 = new person('Abdullha Nacher',21);

// console.log(p1);
// console.log(p2);
//...........................................//
function person(name,age){
    this.name = name;
    this.age = age;
}
//......ruse1..........//
// person.prototype.hello = function(){
//     console.log('Hello,' + this.name);
    
// }
// person.prototype.print = function(){
//     console.log(this.name,this.age);
    
// }
// person.prototype.emali = 'atik@gmail.com';

// var p1 = new person('EmranNazir',19);
// var p2 = new person('Abdullha Nacher',21);

// console.log(p1);
// console.log(p2);
//console.log(person.prototype);
//p1.hello()
//p2.hello()

//.....ruse2.................
person.prototype = {
    hello: function(){
        console.log('Hello,' + this.name);
        
    },
    print: function(){
        console.log(this.name,this.age);
        
    },
    email: 'emrannazir@gmail.com'
}
var p1 = new person('EmranNazir',19);
var p2 = new person('Abdullha Nacher',21);

console.log(p1);
console.log(p2);
//console.log(person.prototype);
