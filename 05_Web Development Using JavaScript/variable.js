var sal =2500;
try{
    if(sal >=1000 && sal<=2000){
        console.log("very less");
    }
    if(sal >= 2100 && sal <=3100){
        console.log("somehow good");
    }
}
catch{
    console.log(error);
}
var a =20;
console.log("value of a outside {} is "+a);
{
  var a=30; 
console.log("value of a inside {} is "+a);
}
console.log("value of a outside {} is "+a);
let b=30.125;
console.log("value of B outside {} is "+b);
{
    let b = 250;
    console.log("value of B inside {} is "+b);
}
console.log("value of B inside {} is "+b);
var x=20.00;
var y=true;
console.log(x*y);