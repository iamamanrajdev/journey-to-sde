//Question3
// Given marks of a student, print on the screen:
// Grade A if marks >= 90
// Grade B if marks >= 70
// Grade C if marks >= 50
// Grade D if marks >= 35
// Fail, otherwise.

function count(marks){
    if(marks>=90){
        console.log("Grade A");
    }
     else if(marks>=70){
          console.log("Grade B");
    }
    else if(marks>=50){
          console.log("Grade C");
    }
    else if(marks>=35){
          console.log("Grade D");
    }
    else{
        console.log("Fail");
    }
}
count(10);