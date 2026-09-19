function negativePalindrome(n){
    let original=Math.abs(n);
    let reverse=0;
    while(n!==0){
        let remainder=Math.abs(n)%10;
        reverse=(reverse*10)+remainder;
        n=Math.floor(Math.abs(n)/10);
    }
    return original===reverse;  //shortcut of if else while comparison it return true or false
}
console.log(negativePalindrome(-121))