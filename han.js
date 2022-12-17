var none = document.getElementById("signup")
var show = document.getElementById("login")

function login(){
    if (none.style.display = "none") {
        none.style.display = "block";
        show.style.display = "none"
    } else {
        none.style.display = "none";
    }
}

function signup(){
    if (show.style.display = "none") {
        show.style.display = "block";
        none.style.display = "none"
    } else {
        show.style.display = "block";
    }
    
}