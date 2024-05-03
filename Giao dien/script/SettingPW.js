var eventPassword = document.getElementById('profile_tab');
eventPassword.onclick = function () {
    window.location.href = "SettingPP.html";
}

eventpaP = document.getElementById('pAP');
eventpaP.onclick = function () {
    window.location.href = "SettingPP.html";
}

document.addEventListener("DOMContentLoaded", function() {
    var confirmPasswordtext = document.getElementById('text_cpw');
    var newPasswordtext = document.getElementById('text_npw');
    confirmPasswordtext.addEventListener('input', function(){
        var giatri1 = newPasswordtext.value;
        var giatri2 = confirmPasswordtext.value;
        if(giatri2  != giatri1)
        {
            document.getElementById('checktext2').innerText = "*Mật khẩu bạn nhập không khớp";
        }
        else
        {
            document.getElementById('checktext2').innerText = "";
        }
    });
});

