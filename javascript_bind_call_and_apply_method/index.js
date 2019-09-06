// function myFunction(){
//     console.log('Hello,' + this.name,this.age,this.email);
    
// }
// var obj1 = {
//     name: 'Harun Ar Roced',
//     age: 31
// }
// obj2 = {
//     name: 'Abbdulha Nacher',
//     email: 'abdullhanacher@SpeechGrammarList.com'
// }

//Bind function return kore..
// console.log(myFunction.bind(obj1));
// myFunction();
//........Bind....
// var binded = myFunction.bind(obj1);
// var binded1 = myFunction.bind(obj2);
// binded()
// binded1()
//............Call....
// myFunction.call(obj1);
// myFunction.call(obj2);
//.............
function add(a,b){
    return (a+b) * this.c;
}
var obj = {
    c: 10
}
var obj1 = {
    c: 20
}
 var res = add.call(obj,10,40);
res;
var res1 = add.apply(obj1,[2,5]);
res1;
var result = add.bind(obj1);
console.log(result(20,45));
