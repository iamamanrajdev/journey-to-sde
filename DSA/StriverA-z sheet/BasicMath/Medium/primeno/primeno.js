function checkprime(n){
    let count=0;
    for(let i=1;i<=n;i++){
        if(n%i===0){
            count++
        }
    }
    if(count===2){
        return true //we can write count===2 it also gives true or false;
    } 
    else{
        return false;
    }
      
    
     
}
console.log(checkprime(3));