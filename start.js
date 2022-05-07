const switchCookie = document.querySelector('#checkbox')
const defaultCookie = window.matchMedia("(show :yes)");
let currentstart = localStorage.getItem('start')
switchCookie.addEventListener('start', cookie)

if (defaultCookie.matches) {
    if (currentstart === 'yes') {
        document.getElementById("start").style.display = "block";
        switchCookie.checked = false;
    } else if (currentstart === 'no') {
        document.getElementById("start").style.display = "none";
        switchCookie.checked = true;
    }

} else {
    if (currentstart === 'yes') {
        document.getElementById("start").style.display = "block";;
        switchCookie.checked = false;
    } else if (currentstart === 'no') {
        document.getElementById("start").style.display = "none";
        switchCookie.checked = true;
    }
}

function cookie(e) {
    if (e.target.checked) {
        document.getElementById("start").style.display = "block";
        localStorage.setItem('start', 'no')
        console.log(localStorage.getItem('start'));
    } else {
        document.getElementById("start").style.display = "block";
        localStorage.setItem('start', 'yes')
        console.log(localStorage.getItem('start'));
    }
}