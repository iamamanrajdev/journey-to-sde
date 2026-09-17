//Question-6
// Given the integer day denoting the day number, print on the screen which day of the week it is. Week starts from Monday and for values greater than 
// 7 or less than 1, print Invalid.

function countday(day){
 if(day<1 || day>7){
    console.log("invalid");
 }
 else if(day===1){
    console.log("Monday");
 }
  else if(day===2){
    console.log("Tuesday");
 }
  else if(day===3){
    console.log("Wednesday");
 }
  else if(day===4){
    console.log("Thursday");
 }
  else if(day===5){
    console.log("Friday");
 }
  else if(day===6){
    console.log("Saturday");
 }
 else{
    console.log("Sunday")
 }

 
}
countday(8);

//*Imp concept
//Why not console.log(countday(8))?
//Because your function already prints the answer using console.log().
//console.log(countday(8)) // not here 
