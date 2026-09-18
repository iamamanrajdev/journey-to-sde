//Basic Questions

//(i)Print all even numbers from 1 to 20.
// Logic

// 1 se 20 tak loop chalao.
// Har number check karo.
// Agar number 2 se completely divide ho jaye → even number hai → print karo.
//-------------------------------------------------------------------------------------------
for(let i=1;i<=20;i++){
  
    if(i%2===0){
       result=i;  
      console.log(result) 
    }

}

//(ii)Print numbers from 10 to 1.

// Logic

// 10 se start karo.
// Har baar 1 kam karo (i--).
// Jab tak i >= 1 ho, number print karo.
//-----------------------------------------------------------------------------------
for(let i=10;i>=1;i--){
    console.log(i);
    
}



