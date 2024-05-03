var cb = document.getElementById('checkbox');
var btn = document.getElementById('btn');

btn.onclick = function() {
    if(cb.checked){}
    else
    {
        alert("Hãy đồng ý với điều khoản sử dụng");
    }
}

window.addEventListener('popstate', function(e){
    this.window.history.back();
})
