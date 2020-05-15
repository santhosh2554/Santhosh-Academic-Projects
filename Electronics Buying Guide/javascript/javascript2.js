function log(){
     window.open("login.html","_self");
}
var $ = function (id) {
    return document.getElementById(id);
};
function validate() {
document.getElementById("form").style.width = "700px";
    document.getElementById("email").style.marginleft = "0px";
    document.getElementById("passwd").style.paddingleft = "0px";
    var email = document.getElementById('email').value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isvalid = true;
    if (email === "") {
        isvalid = false;
        $('erroremail').innerHTML = "Please Enter Email";
    } else if (!re.test(email)) {
        isvalid = false;
        $('erroremail').innerHTML = "Please Enter valid Email address";
    } else {
        $('erroremail').innerHTML = "";
    }
    
    var passwd = document.getElementById('passwd').value;
    var pattern1 = pattern = /(?=.*[a-z]).{8,}/;
    var isvalid = true;
    if (passwd === "") {
        isvalid = false;
        $('errorpasswd').innerHTML = "Please Enter password";
    } else if (!pattern1.test(passwd)) {
        isvalid = false;
        $('errorpasswd').innerHTML = "Password should be size 8 ";
    } else {
        $('errorpasswd').innerHTML = "";
    }
    
    
    var rpasswd = document.getElementById('rpasswd').value;
    var pattern1 = pattern = /(?=.*[a-z]).{8,}/;
    var isvalid = true;
    if (rpasswd === "") {
        isvalid = false;
        $('errorrpasswd').innerHTML = "Please Enter password";
    } else if (!pattern1.test(rpasswd)) {
        isvalid = false;
        $('errorrpasswd').innerHTML = "Password should be size 8 ";
    } else {
        $('errorrpasswd').innerHTML = "";
    }
var fname = document.getElementById('fname').value;
       
       var pattern = /^[a-zA-Z]+$/;
        var isvalid = true;
        if(fname === ""){
            isvalid = false;
       $('errorfname').innerHTML = "Please Enter First Name";
        }else if(!pattern.test(fname)){
            isvalid = false;
            $('errorfname').innerHTML = "Please Enter First Name with letters only";
        }else{
            $('errorfname').innerHTML = "";
        }
    var lname = document.getElementById('lname').value;
       
       var pattern = /^[a-zA-Z]+$/;
        var isvalid = true;
        if(lname === ""){
            isvalid = false;
       $('errorlname').innerHTML = "Please Enter First Name";
        }else if(!pattern.test(fname)){
            isvalid = false;
            $('errorlname').innerHTML = "Please Enter First Name with letters only";
        }else{
            $('errorlname').innerHTML = "";
        }
    var x = document.getElementById("in").checked;

        if(x===false){
            isvalid = false;
     $('errorcheck').innerHTML = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Please accept the terms and conditions";
}
else{
     $('errorcheck').innerHTML = "";
}
    if(isvalid === true){
        document.getElementById("form").innerHTML = "";
        document.getElementById("p2").innerHTML = "Thank you for Registering with us.";
    }


}


