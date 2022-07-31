document.addEventListener("submit",function (event) {
    event.preventDefault();
    

   var grade = document.getElementById("grade").value;
   var userName=document.getElementById("name").value;

   if (grade>=80) {
       document.getElementById("result").innerHTML=userName+" You had A1";
   } else if( grade>=75){
       document.getElementById("result").innerHTML = userName + " You had B2";
   }else if( grade>=70){
        document.getElementById("result").innerHTML= userName + " You had B3";
   }else if(grade>=65){
       document.getElementById("result").innerHTML = userName + " You had C4";
   }else if(grade>=60){
       document.getElementById("result").innerHTML = userName + " You had C5";
   }else if(grade>=55){
       document.getElementById("result").innerHTML = userName + " You had C6";
   }else if (grade>=50) {
       document.getElementById("result").innerHTML = userName + " You had D7";
   }else if (grade>=45) {
       document.getElementById("result").innerHTML = userName + " You had E8";
   }else if (grade<45 ) {
       document.getElementById("result").innerHTML = userName + " You had F9";
   }else{
       document.getElementById("result").innerHTML = userName + "Enter result";
   }

  
   
})