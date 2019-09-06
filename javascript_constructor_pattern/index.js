// var books = [
//     {
//         name: 'Functional Programming'
//     },
//     {
//         name: 'Javascript Definitive Guide'
//     }
// ]
//............................//
// function person(){
//     console.log('I have Construted.....');
    
// }

// var p1 = new person();
//..........create a Class........................//

// function Person(name,email){
//     this.name = name;
//     this.email = email;
//     this.print = function(){
//         console.log('Name:' + this.name);
        
//     }
// }

// var p1 = new Person('Emran','mdemran9999@gmail.com');
// // p1.ADDpolytiechnic = 2016;
// var p2 = new Person('nazir','mdnazir9999@gmail.com');
// var p3 = new Person('emon','mdemon9999@gmail.com');
// var p4 = new Person('hamed','mdhamed9999@gmail.com');

// var people = [p1,p2,p3,p4];
// console.log(p1.name,p1.email);
// console.log(p1);

// console.log(people);

// people.forEach(function(Person){
//     // console.log('Email:'+person.email);
//     Person.print();
// })

// for(var pops in p1){
//     console.log(pops);
    
// }

function Person(name,email){
    this.name = name;
    this.email = email;
}

var details = new Person('Emran','mdemranhamed888@gmail.com')
console.log(details.constructor);
