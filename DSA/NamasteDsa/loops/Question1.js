// Question-1

// Given an array, arr[] of n integers, and an integer element x,
//  find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.

//link-https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1

// Logic

// Loop se array ka har element check karo.
// Agar x mil gaya → uska index return karo.
// Agar poora array check karne ke baad x nahi mila → loop ke bahar -1 return karo.

// Important: -1 loop ke andar nahi lagana, warna first element match na hone par hi function stop ho jayega.

//---------------------------------------------------------------------------------------------------------------------------------------------
function searchElement(arr,n){
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n){
            return i;
        }
       
    }
    return -1;
    

}
    console.log(searchElement([1,3,4,56],245))
    console.log(searchElement([1,3,4,56],56))
