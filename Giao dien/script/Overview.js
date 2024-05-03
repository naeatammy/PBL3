
var menucpn = document.getElementsByClassName('menu');
for(var i = 0; i < menucpn.length; i++)
{
    menucpn[i].onmouseover = function(e) {
        e.target.setAttribute("style", "color: #589af0;")
    }
    menucpn[i].onmouseout = function(e) {
        e.target.setAttribute("style", "color: black;")
    }
}

var login = document.getElementById('login');
login.onclick = function() {
    window.location.href = "Login.html";
}

var signup = document.getElementById('signup');
signup.onclick = function() {
    window.location.href = "signup.html";
}
