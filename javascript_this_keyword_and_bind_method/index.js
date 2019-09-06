// var obj = {
//      name: 'Hamed',
//      print: function(){
//          console.log(this);
//          ////console.log(this.name);
         
//      }
// }
// obj.print();

// function myFun(){
//     console.log(this);
//     function inner(){
//         console.log(this);
        
//     }
//     new inner()
// }
// myFun();

// var person = {
//         name: 'Emran',
//         print: function(){
//              console.log(this);
            
//             console.log('Hello,'+this.name);
            
//         }
// }
// person.print();
// var myname = person.name;
// console.log(myname);

//  var myPrint = person.print.bind(person);
//  //console.log(myPrint);
//  myPrint();

//...........................///..................//

// function add(num){
//     console.log(this);
    
//     return this.value + num;
// }
// var obj = {
//     value: 30
// }

// var binded = add.bind(obj);
// var result = binded(78);
// result;
//............................././/

var person = {
    name: 'Nacher',
    print: function(){
        //var name = this.name
        setTimeout(function(){
            console.log(this);
            console.log('hello,'+this.name)   
        }.bind(this),200);
    }
}
person.print();