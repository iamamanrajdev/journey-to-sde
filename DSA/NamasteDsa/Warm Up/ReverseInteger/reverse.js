function reversed(n){
let original=n;
 let sign=n<0?-1:1;
let reverse=0;
while(n!=0){
   let remainder=Math.abs(n)%10;
    reverse= reverse*10+remainder;
    n=Math.floor(Math.abs(n)/10);
}
reverse= reverse*sign;
let limit=Math.pow(2,31);
if(reverse<-limit || reverse>limit-1){
    return 0;
}
return reverse;
}
console.log(reversed(-123));make