var caa = document.getElementById('caa');
caa.onmouseover = function() {
    caa.setAttribute("style", "color: #589af0;")
}
caa.onmouseout = function() {
    caa.setAttribute("style", "color: black;")
}

caa.onclick = function() {
    window.location.href = "SignUp.html";
}

window.addEventListener('popstate',function() {
    this.window.history.back();
})