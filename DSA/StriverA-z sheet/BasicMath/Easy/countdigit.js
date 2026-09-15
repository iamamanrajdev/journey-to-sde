    // Question link -https://www.geeksforgeeks.org/problems/count-total-digits-in-a-number/

    //  Given a number n, return the count of digits in this number.
    //*Logic
    // means agar n=1234 to count karke batana hai ki kitna digit hai yani ki isme 4 hai 
    // ab man lo koi n ka value 0 de de to wo bhi to 1 digit hua na uska bhi count result 1 aana chhaiye

    // agar koi no ko count karna hai to chota karna hoga like 1234/10 so 123 then 123 divide 
    // by10 12 same isi process ko karna hai 

    function countdigit(n){
    
         if(n===0){
            return 1;
         }
         let count=0;
         while(n>0){
            n=Math.floor(n/10);
            count++
         }
         return count;

    }
    console.log(countdigit(23456));
    console.log(countdigit(0));
