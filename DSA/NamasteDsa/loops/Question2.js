//Question-2
//Given an array, find the largest element using a loop.
// Logic
// Pehle max = -Infinity maan lo.
// Har element ko max se compare karo.
// Agar element bada hai → max update karo.
// End mein max hi largest element hoga.
//-------------------------------------------------------------------------------------
function largestElement(arr){
    let max=-Infinity
    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;

  

}
console.log(largestElement([1,4,7,8]))

//same logic ko minimum element 

function smallestElement(arr){
    let min=Infinity
    for(let i=0; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min;

  

}
console.log(smallestElement([1,4,7,8]))