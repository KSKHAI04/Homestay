//script.js - script to save login credentials

window.onload = logout();

function logout(){
    localStorage. removeItem('InOrNot');

}

function check(){
    var idPsw = document.getElementById('LoginForm');
    if(idPsw.checkValidity()){login();}
    else{
        alert("Please fill in all the fields.");
    }

}



function register(){
    //Register
    let Register = document.getElementById('RegisterForm');

    Register.addEventListener('submit', (e) => {

    e.preventDefault();
    
    let Register_Name = document.getElementById('Register_Name').value;
    let Register_Email = document.getElementById('Register_Email').value;
    let Register_Password = document.getElementById('Register_Password').value;

    localStorage.setItem("Name", Register_Name);
    localStorage.setItem("Email", Register_Email);
    localStorage.setItem("Password", Register_Password);

    alert("Successfully Created Account!");
    window.location.href = "tpl_login.html";
    })
}

function login(){
    //Login
    let Login1 = document.getElementById('LoginForm');

    let LocalEmail = localStorage.getItem('Email');
    let LocalPassword = localStorage.getItem('Password');

    let Login_Email = document.getElementById('Login_Email');
    let Login_Password = document.getElementById('Login_Password');  

    if(Login_Email.value == LocalEmail && Login_Password.value == LocalPassword){
        localStorage.setItem('InOrNot', '1');
        window.location.href = "myaccount.html"
        
    }else{
        alert('Email or Password is wrong!');
        return false;
    }
    
}

function resetPsw(){
    let LocalEmail = localStorage.getItem("Email");
    let userEmail = document.getElementById("userEmail");
    let psw1 = document.getElementById("newP").value;
    let psw2 = document.getElementById("newP2").value;
    
    if(document.forms[0].checkValidity()){
        //valid
        if((LocalEmail == userEmail.value)){

            if(psw1 == psw2){
                alert("Password sucessfully reset");
                localStorage.setItem("Password", psw1);
                window.location.href = "tpl_login.html";
            }
            else{
                document.getElementById("wrong").style.opacity = "1";
                document.getElementById("wrong").innerHTML = "Please recheck password";
            }
        }
        else{
            document.getElementById("wrong").style.opacity = "1";
            document.getElementById("wrong").innerHTML = "Please check your email";
            
        }
    }
    else{
        document.getElementById("wrong").style.opacity = "1";
        document.getElementById("wrong").innerHTML = "Please fill all required data";

    }


}