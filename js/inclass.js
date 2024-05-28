// {
//     const myinput=document.getElementById("input");

//     function enterpassword(){
//         let user_value=myinput.value
//         let minchars=8;
//         let maxchars=16;
//         let specialchars="!@#$%^&*/"
//         if(user_value.length<minchars||user_value.length>maxchars||user_value==specialchars){
//             alert("wronginput")
//         }
//         else{
//            alert("correctinput")
//         }
    
//         }
//         console.log(user_value);
// }

{
    let button = document.getElementById("mybutton")
    sampleNumbers ="0123456789"
    sampleSpecial ="#\\|*&%^$£!@"
    sampleChars="abcdefghijklmnopqrstuvwxyz"
    sampleCharsu="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    function checkpassword(password, regular) {
        for(i =0;i<regular.length;i++){
            if(password.includes(regular[i])){
                return true
            }
        }
        return false
    }
    function validatePassword(){
        let password = document.getElementById("input").value
        if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial)&&checkpassword(password,sampleChars) &&(password.length>8)&& checkpassword(password,sampleCharsu)){
            alert("Correct input")
        } else if(!checkpassword(password,sampleChars)){
                alert("does not contain letters")
            }
            else if(!checkpassword(password,sampleSpecial)){
                alert("does not contain special charachters")
            }
            else if(!checkpassword(password,sampleNumbers)){
                alert("does not contain numbers")}
            else if(password.length<8){
                                alert("add more charachters")
                            }
            else if (!checkpassword(password,sampleCharsu)){
                alert("does not contain uppercase")
            }               
            
            else{
            alert("Incorrect")
        }
    }
    button.addEventListener('click', validatePassword)
}