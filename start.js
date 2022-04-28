const switchBtn = document.querySelector('#checkbox')
const defaultTheme = window.matchMedia("(prefers-color-scheme :yes)");
let currentstart = localStorage.getItem('start')
switchBtn.addEventListener('change', switchTheme)

if (defaultTheme.matches) {
    if (currentstart === 'yes') {
        document.getElementById("start").style.display = "block";
        switchBtn.checked = false;
    } else if (currentstart === 'no') {
        document.getElementById("start").style.display = "none";
        switchBtn.checked = true;
    }

} else {
    if (currentstart === 'yes') {
        document.getElementById("start").style.display = "block";;
        switchBtn.checked = false;
    } else if (currentstart === 'no') {
        document.getElementById("start").style.display = "none";
        switchBtn.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.getElementById("start").style.display = "block";
        localStorage.setItem('start', 'no')
        console.log(localStorage.getItem('theme'));
    } else {
        document.getElementById("start").style.display = "block";
        localStorage.setItem('start', 'yes')
        console.log(localStorage.getItem('theme'));
    }
}