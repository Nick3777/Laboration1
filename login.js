function process(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(!(username=="")&&!(password=="") && validation)
        alert("Thanks for the Login")
}

var ucl = 0;
var numb = false;
var len = false;
var validation = false;
function psw_validate(){
    var psw = document.getElementById("password");
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(psw.value.match(upperCaseLetters)) {
            ucl++;
        }
        // Validate numbers
        var numbers = /[0-9]/g;
        if(psw.value.match(numbers)) {
            numb = true;
        }
        // Validate length
        if(psw.value.length >= 8) {
            len = true;
        }
        if(ucl>=2 && numb && len)
        {
            validation = true;
        }
}

function pswfocus(){
    document.getElementById("message").style.display="block";
}

function pswonblur(){
    document.getElementById("message").style.display="none";
}

