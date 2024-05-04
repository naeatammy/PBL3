var projecttag = document.querySelector('.myprojecttag');
projecttag.onmouseover = function() {
    projecttag.setAttribute("style", "background-color: #1a1f27;");
}
projecttag.onmouseout = function() {
    projecttag.setAttribute("style", "background-color: black");
}

var fbtag = document.querySelector('.feedbacktag');
fbtag.onmouseover = function() {
    fbtag.setAttribute("style", "background-color: #1a1f27; border-bottom: 3px solid white;");
}
fbtag.onmouseout = function() {
    fbtag.setAttribute("style", "background-color: black; border-bottom: none");
}
fbtag.onclick = function() {
    window.location.href = "Feedback.html";
}

var listtag = document.querySelector('.listtag');
listtag.onmouseover = function() {
    listtag.setAttribute("style", "background-color: #1a1f27; border-bottom: 3px solid white;");
}
listtag.onmouseout = function() {
    listtag.setAttribute("style", "background-color: black; border-bottom: none");
}
listtag.onclick = function() {
    window.location.href = "Favourite.html";
}

var cw = document.getElementById("cw");
cw.onmouseover = function() {
    cw.setAttribute("style", "background-color: #f9f9f9;");
}
cw.onmouseout = function() {
    cw.setAttribute("style", "background-color: none");
}

var pw = document.getElementById("pw");
pw.onmouseover = function() {
    pw.setAttribute("style", "background-color: #f9f9f9;");
    document.getElementById("pw_text").setAttribute("style", "border-bottom: 5px solid black;");
}
pw.onmouseout = function() {
    pw.setAttribute("style", "background-color: none");
    document.getElementById("pw_text").setAttribute("style", "border: none");
}
pw.onclick = function() {
    window.location.href = "MyProjectFL_PW.html";
}

var client = document.getElementById("client");
client.onclick = function() {
    window.location.href = "MyProjectCL_OP.html";
}