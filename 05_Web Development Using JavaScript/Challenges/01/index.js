console.log("Javascript Challenge");
console.log("Write a program to print triangle of user defined integers sum.");
let num = 5;
console.log(`Number = ${num}`);
console.log("1=1");
for(let i=2;i<=num;i++){
    LinePrint(i);
}

function LinePrint(i){
    var L="";
    var sum = 0;
    for(let j=1;j<=i;j++){
        sum=sum+j;
        L =L+j;
        if(j==i){
            L=L+"="+sum;
        }
        else{
            L=L+"+"; 
        }
    }
return console.log(L);
}