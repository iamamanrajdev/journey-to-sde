
function checkpalindrome(n){
    let reverse=0;
     let original=n;
    while(n>0){
       
         let rem=n%10;
        reverse=(reverse*10)+rem;
        n=Math.floor(n/10);
        

    }
    if(reverse===original){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkpalindrome(-121 ));