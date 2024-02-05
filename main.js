let a=5;
let check = 1;
for(let i=2; i<a; i++){
    
    if(a % i == 0){
        // console.log("Given num is a not a prime number");
        check++;
    }

}
if(check>1){
    console.log("Not a Prime Num", check)
}
else{
    console.log("Prime Num", check);
}