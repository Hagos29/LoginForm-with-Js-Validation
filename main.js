var emailInput=document.getElementById('email');
var passwordInput=document.getElementById('password')
var button=document.getElementById('btn');
var text=document.getElementById("text");

function myFunction() 
{
    if (emailInput.value == "hagos@gmail.com" && passwordInput.value =="123")
     {
        return true;
    }
    else{
        text.innerHTML="Enter correct Username & Password "
        text.style.color='#ff0000';
        return false
    }
}

