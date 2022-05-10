//area function
var l=10;
var w=15;
var result = area(l,w)
console.log(`Area is ${result}`);

function area(x,y)
{
    var area =x*y;
    return area;
}
//--------------------
function add_n_no(){
    let add=0;
    for(let i=0;i<arguments.length;i++)
    {
        add+=arguments[i];
    }
    return add;
}
console.log(add_n_no(1,2));
console.log(add_n_no(1,2,3));
console.log(add_n_no(1,2,3,4,50,300));
//---example of this 
let name ='akshay';

function greet(){
    var surname ='ingole';
    console.log(`welcome ${name} ${surname}`);
}
greet();
//------------------------------------------------------
//square area function
var side = 10;
var result = Square_area(side);
console.log(`Area of square is ${result}`);
function Square_area(s)
{
    var area =s*s;
    return area;
}
//------------------------------------------------------
function c_area(r){
    return 3.14*r*r;
}
console.log("area of circle is "+c_area(5));
//-----------------------------------------------------
var result = re_area(10,10);
console.log("Area of rectangle is "+area(10,10));

function re_area(){
    for(let j=0;j<arguments.length;j++){
        let area = arguments[j]*arguments[j+1];
    }
    return area;
}
