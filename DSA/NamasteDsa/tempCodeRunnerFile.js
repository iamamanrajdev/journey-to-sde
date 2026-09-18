function countdigit(n){
    let count=0;
    for(let i=0;i<n;i++){
        n=n%10;
        count++;
    }

    return count;