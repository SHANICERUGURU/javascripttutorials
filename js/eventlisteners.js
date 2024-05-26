{
    const button=document.getElementById("some_button");
      let bodyisdefault=true

     function changebackground(){
        // document.body.style.backgroundColor="violet"
        if(bodyisdefault){
          document.body.style.backgroundColor="violet" 
          bodyisdefault=false 
        }else{
            document.body.style.backgroundColor="white"
            bodyisdefault=true
        }
    }
    button.addEventListener("click", changebackground)

   const mypar=document.getElementById("myh1")
    function changecontentcolor(){
        mypar.style.color="lightgreen"
    }
    button.addEventListener("mouseover",changecontentcolor)
     function returncolor(){
        mypar.style.color="black"
     }
     button.addEventListener("mouseout",returncolor)

const chooserbutton=document.getElementById("chooser");
function choosebacakgroundcolor(user_color){
    document.body.style.backgroundColor=user_color
}
chooserbutton.addEventListener("click",function(){
     let userInput =prompt("enter your choice color")
     choosebacakgroundcolor(userInput)
})

}