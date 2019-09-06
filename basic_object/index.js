// var obj = {};
// var obj1 = new Object;

// console.log(obj);
// console.log(obj1);

var man = {
    name: 'Emran Hamed',
    study: 'Student',
    student: 'jhenaidha polytiechnic',
    depertment: 'Computer',
    roll: '328435',
    print: function(){
        console.log(this.name,this.depertment);
        
    }

}
//...................................//

// console.log(man);
// // console.log(man.print());
// man.print();

//.........................................//
// console.log('Name is:'+ man.name);
// console.log('Student:'+man['student']);
//..........................................//

//.............add a properties..................//

 man.polytiechnicstudy = 2016;
// console.log('polytiechnicstudy:'+man.polytiechnicstudy);
man.polytiechnicstudy_end = 2020;
// console.log('polytiechnicstudy_end:'+man.polytiechnicstudy_end);
//........................................//

// for (in loop){}....
for(var properties in man){
    // console.log(properties);
    console.log(properties + '=' + man[properties]);
    
    
}
