//Question-5
//*link-https://www.geeksforgeeks.org/problems/second-largest3735/1
//Second largest element in an array

// Second Largest Element — My Logic

// Step 1: Pehle array ka largest element find karo.

// Maan lo 4 bacche hain aur humein sabse lamba baccha find karna hai.

// Example:

// [2, 8, 5, 4]

// Pehle largest nikala:

// max = 8

// ⸻

// Step 2: Ab largest ko ignore karke second largest find karo.

// Ab 8 ko side mein hata do.

// Bache:

// [2, 5, 4]

// In teeno mein jo sabse bada hai, wahi second largest hoga.

// So:

// secondMax = 5

// ⸻

// Step 3: Second largest ke liye bhi wahi largest wala logic use karo.

// Isliye:

// let secmax = -Infinity;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== max && arr[i] > secmax){
//         secmax = arr[i];
//     }
// }

// Yahan:

// * arr[i] !== max → jo largest already mil chuka hai, usko ignore karo.
// * arr[i] > secmax → baaki numbers mein se sabse bada number dhundo.
// * secmax = -Infinity → starting mein maan lo ki second largest abhi mila hi nahi hai.

// ⸻

// Step 4: Agar second largest mila hi nahi

// Example:

// [5, 5, 5, 5]

// Pehle:

// max = 5

// Ab second-largest wale loop mein har number max ke equal hai.

// Isliye:

// arr[i] !== max

// kabhi true nahi hoga.

// secmax change hi nahi hoga:

// secmax = -Infinity

// Iska matlab:

// “Mujhe largest ke alawa koi doosra distinct number mila hi nahi.”

// Isliye:

// if(secmax === -Infinity){
//     return -1;
// }

// Final mental model

// First find the largest.
// Then ignore that largest and find the largest among the remaining elements.
// If no remaining distinct element exists, return -1.
//-----------------------------------------------------------------------------------------------------------------------------
function secondLargest(arr){
    //to find largest element
    let max=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
        
    }
   
    }
//to find second max
    let secmax=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=max && arr[i]>secmax){
            secmax=arr[i]
        }
    }
    //condition if sec max not present
   if(secmax===-Infinity){
    return -1;
   }
   return secmax;
}
 
console.log(secondLargest([2,2,2]))