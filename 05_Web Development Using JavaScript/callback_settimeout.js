function register(name,age,number,call1){
    call1(name);
    
}
function login(name){
    console.log(name+" logged in");
    dashboard();
}
function dashboard(){
    console.log("this is dashboard");
    logoff();
}
function logoff(){
    console.log("this is logoff")
}
setTimeout(register,4000,"akki",27,22222,login)
