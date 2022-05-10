
class Area{
    pi =3.14;
    constructor (length,width){
        this.length=length;
        this.width=width;
    }
    get rect_area(){
        return this.length*this.width;
    }
    get sq_area(){
        return this.length*this.length;
    }
    get circl_area(){
        return this.pi*(this.length*this.length);
    }
    set new_width(x){
        this.width=x;
    }
}
const obj1=new Area(4,8);
const obj2=new Area(3,9);
console.log(`Area of rectangle with length = ${obj1.length} & width = ${obj1.width} is ${obj1.rect_area}`);
console.log(`Area of rectangle with length = ${obj2.length} & width = ${obj2.width} is ${obj2.rect_area}`);
const obj3=new Area(6);
const obj4=new Area(9);
console.log(`Area of Squar with side = ${obj3.length} is ${obj3.sq_area}`);
console.log(`Area of Squar with side = ${obj4.length} is ${obj4.sq_area}`);
const obj5=new Area(7);
console.log(`Area of circle with radius = ${obj5.length} is ${obj5.circl_area}`);
obj2.new_width=10;
console.log(`Area of rectangle with length = ${obj2.length} & width = ${obj2.width} is ${obj2.rect_area}`);
