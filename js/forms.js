{
   function validateinput(){
    let myinput=document.getElementById("numb");
    let user_value=myinput.value


      if((isNaN(user_value)) || !(user_value<=10 && user_value>=1)){
            alert("wronginput")
        }else{
            alert("correct")
        }
    }

    function changetouppercase(){
        let myinput =document.getElementById("numb");
        myinput.value = myinput.value.toUpperCase()
    }
}