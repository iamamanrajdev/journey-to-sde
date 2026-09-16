// You are given an integer n. You need to check if the number is prime or not.
//  Return true if it is a prime number, otherwise return false.
// Hint-A prime number is a number which has no divisors except 1 and itself.

//Logic
//Prime no ke divisor do hi ho sakte hai so count karo agar divisor 2 se jyada to prime nai hai

// Question link-https://www.geeksforgeeks.org/problems/prime-number2314/1
//--------------------------------------------------------------------------------------------------------------------------------------------------------
function checkPrime(n){
    let count =0
    for(let i=0;i<n;i++){
        if(n%i===0)
            count=count++; 
    }
    if(count===2){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkPrime(9))