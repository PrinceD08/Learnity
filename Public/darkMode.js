function darkMode(){
    document.body.style.backgroundColor = "black";
    document.getElementById("profile").style.color = "white";
    document.getElementById("profile2").style.color = "white";
    document.getElementById("profile3").style.color = "white";
    document.getElementById("profile").style.borderColor = "white";
    document.getElementById("profile2").style.borderColor = "white";
    document.getElementById("profile3").style.borderColor = "white";
    document.getElementById("profile").style.boxShadow = "0px 0px 20px white";
    document.getElementById("profile2").style.boxShadow = "0px 0px 20px white";
    document.getElementById("profile3").style.boxShadow = "0px 0px 20px white";
}
function lightMode(){
    window.location.reload();
}