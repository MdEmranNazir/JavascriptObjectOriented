function P1(a,b){
    this.a = a;
    this.b = b;
}
function Obj1(a,b,c){
    P1.call(this,a,b);
    this.c = c;
}
function Obj2(){
    Obj1.call(this,10,20,30);

}
Obj2.prototype = Object.create(Obj1.prototype);
var obj2 = new Obj2();
obj2;
// var obj1 = new Obj(3,7);
// obj1;