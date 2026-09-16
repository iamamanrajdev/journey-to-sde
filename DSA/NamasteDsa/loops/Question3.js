//Question-3

//Write a function that counts negative no in array 

//logic

// isme array diya hua hai negative no kitne hai wo batana hai 
// so pehle to count ko 0 man lo agar negstive no nai ho to count 0 bataye 
// ab agar koi -ve no hai to wo 0 se chota hi hota hai agar koi no mile to usko count karo 
// and phir aage badh ke check karo count++
//---------------------------------------------------------------------------------------------------
function findNegativeno(arr){
    let count=0;
 for(let i=0; i<arr.length;i++){
    if(arr[i]<0){
        count++
    }
 }
 return count;

}
console.log(findNegativeno([1,2,4,6,5]))


//IS question se ek aur question ban jayega ki jitne bhi negative no hai un sabko store karo
//logic
//yaha ek khali aaray banao aur usme jitne me negative no hai store karo yani push karo
function storeNegativeno(arr){
    let result=[];
 for(let i=0; i<arr.length;i++){
    if(arr[i]<0){
        result.push(arr[i])
    }
 }
 return result;

}
console.log(storeNegativeno([1,2,4,6,5,8,9]))