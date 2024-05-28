{
    const button=document.getElementById("mybutton")
    const myh3=document.getElementById("myh3")
    

     function changeh3(){
        myh3.style.color="aqua"
        myh3.style.fontSize="5em"
        myh3.innerHTML=`<h3>HELLO DOM <h3>`
     }
     button.addEventListener("click", changeh3)

}