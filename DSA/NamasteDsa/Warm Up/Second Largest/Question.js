function secondlarge(arr){
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            
        }
    }
    let secmax=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==max && arr[i]>secmax){
            secmax=arr[i];
        }
    }
    if(secmax===-Infinity){
        return -1;
    }
    else{
        return secmax;
    }


}
 console.log(secondlarge([4,4,4,4]))