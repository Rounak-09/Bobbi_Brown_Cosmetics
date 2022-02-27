// show password 

function showPassword(){
    var pwd = document.getElementById('pwd');
    if(pwd.getAttribute('type') == 'password'){
        pwd.setAttribute('type','text')
    }else{
        pwd.setAttribute('type','password')
    }
}

function createLogin(){
    var loginDetails = JSON.parse(localStorage.getItem("loginDetails")) || [];

    var loginObj = {
        email : document.getElementById("email1").value,
        password : document.getElementById("password").value,
        month : document.getElementById("month").value,
        day : document.getElementById("day").value,
    }

    loginDetails.push(loginObj);
    localStorage.setItem("loginDetails",JSON.stringify(loginDetails));

    document.getElementById("email1").value = "";
    document.getElementById("password").value = "";
    document.getElementById("month").value = "";
    document.getElementById("day").value = "";

    alert("Account created successfully.");
}

function checkLogin(){
    var loginDetails = JSON.parse(localStorage.getItem("loginDetails")) || [];

    var checkEmail = document.getElementById("loginEmail").value;
    var checkPassword = document.getElementById("loginPassword").value;

    function checkCredentials(){
        for(var i=0; i<loginDetails.length; i++){
        if(checkEmail==loginDetails[i].email && checkPassword==loginDetails[i].password){
            return alert("Login successful.");
            }
        }
        return alert("Invalid login credentials.");
    }
    checkCredentials();
}