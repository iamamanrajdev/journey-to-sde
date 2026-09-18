//Question-6
//Given a number n, return the count of digits in this number
//link-https://www.geeksforgeeks.org/problems/count-total-digits-in-a-number/1

// Logic-
// 1. count = 0 se start karo.
// 2. Jab tak n > 0 hai, loop chalao.
// 3. Har loop mein:
//     * n ko 10 se divide karke last digit hatao.
//     * count ko 1 se increase karo.
// 4. Jab n 0 ho jaye, loop stop.
// 5. count = total digits.

//-------------------------------------------------------------------------------------------------

function countdigit(n){
    let count=0;
    n=Math.abs(n)//Math.abs() → negative ko positive bana deta hai. agar koi no negtive ho isliye use kiye
    while(n>0){
        n=Math.floor(n/10);
        count++
    }
    return count;
}

  console.log(countdigit(-123455));