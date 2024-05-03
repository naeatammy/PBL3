var listtag = document.querySelector('.listtag');
listtag.onmouseover = function() {
    listtag.setAttribute("style", "background-color: #1a1f27;");
}
listtag.onmouseout = function() {
    listtag.setAttribute("style", "background-color: black");
}

var projecttag = document.querySelector('.myprojecttag');
projecttag.onmouseover = function() {
    projecttag.setAttribute("style", "background-color: #1a1f27; border-bottom: 3px solid white;");
}
projecttag.onmouseout = function() {
    projecttag.setAttribute("style", "background-color: black; border-bottom: none");
}

var fbtag = document.querySelector('.feedbacktag');
fbtag.onmouseover = function() {
    fbtag.setAttribute("style", "background-color: #1a1f27; border-bottom: 3px solid white;");
}
fbtag.onmouseout = function() {
    fbtag.setAttribute("style", "background-color: black; border-bottom: none");
}

var username = document.querySelector('#profile_name');
username.onmouseover = function() {
}

username.onmouseout = function() {

}

var fav = document.querySelector('.favoritetag');
fav.onmouseover = function() {
    fav.setAttribute("style", "background-color: #1a1f27; color: white;");
    document.querySelector('.favorite').setAttribute("style", "color: white");
}
fav.onmouseout = function() {
    fav.setAttribute("style", "background-color: none");
    document.querySelector('.favorite').setAttribute("style", "color: black");
}
fav.onclick = function() {
    window.location.href = "Favourite.html";
}

var rv = document.querySelector('.recentlyviewedtag');
rv.onmouseover = function() {
    rv.setAttribute("style", "background-color: #1a1f27; color: white;");
    document.querySelector('.recentlyviewed').setAttribute("style", "color: white ;);");
}
rv.onmouseout = function() {
    rv.setAttribute("style", "background-color: none");
    document.querySelector('.recentlyviewed').setAttribute("style", "color: black");
}
rv.onclick = function() {
    window.location.href = "RecentlyView.html";
}

var bm = document.querySelector('.bookmarkstag');
bm.onmouseover = function() {
    bm.setAttribute("style", "background-color: #1a1f27; color: white;");
    document.querySelector('.bookmarks').setAttribute("style", "color: white");
}
bm.onmouseout = function() {
    bm.setAttribute("style", "background-color: none");
    document.querySelector('.bookmarks').setAttribute("style", "color: black");
}
bm.onclick = function() {
    window.location.href = "Bookmark.html";
}

var bf = document.getElementById("bf");
bf.onclick = function() {
    window.location.href = "BrowseFreelancer.html";
}