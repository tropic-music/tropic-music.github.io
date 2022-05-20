var scrollb = 1;
var mg = 1;
function mgb() {
  if(mg == 1){
    document.getElementById("iplay").style.height = "92px";
    document.getElementById("iplay").scrolling = "no"
    document.body.style.overflow = 'visible';
    document.getElementById("mgbtn").disabled = false;
    document.getElementById("mgbtn").classList.remove("rotade")
    document.getElementById("spacei").style.display = "block"
    scrollb = 1;
    mg = 0;
  } else {
    document.getElementById("iplay").style.height = "94.5%";
    document.getElementById("iplay").scrolling = "yes"
    document.body.style.overflow = 'hidden';
    document.getElementById("mgbtn").classList.add("rotade")
    scrollb = 0;
    mg = 1;
  }
}
function mgbs() {
    document.getElementById("iplay").style.height = "92px";
    document.getElementById("iplay").scrolling = "no"
    document.getElementById("mgbtn").disabled = false;
    document.getElementById("spacei").style.display = "block"
    scrollb = 1;
    mg = 0;
  }
//Pages
function home() {
  document.getElementById("hm").classList.add("select");
  document.getElementById("add").style.display = "none";
  document.getElementById("save").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("ab").classList.remove('select');
  document.getElementById("dw").classList.remove('select');
  document.getElementById("im").classList.remove('select');
  if(scrollb == 1){
    document.body.style.overflow = 'visible';
  }
  }
  function save() {
var div = document.getElementById("save");
if (div.style.display === "block") {
} else {
div.style.display = "block";
document.body.style.overflow = 'hidden';
document.getElementById("dw").classList.add("select");
document.getElementById("add").style.display = "none";
document.getElementById("im").classList.remove('select');
document.getElementById("about").style.display = "none";
document.getElementById("ab").classList.remove('select');
document.getElementById("hm").classList.remove('select');
}
}
function add() {
var div = document.getElementById("add");
if (div.style.display === "block") {
} else {
div.style.display = "block";
document.body.style.overflow = 'hidden';
document.getElementById("im").classList.add("select");
document.getElementById("save").style.display = "none";
document.getElementById("dw").classList.remove('select');
document.getElementById("about").style.display = "none";
document.getElementById("ab").classList.remove('select');
document.getElementById("hm").classList.remove('select');
}
}
function about() {
var div = document.getElementById("about");
if (div.style.display === "block") {
} else {
div.style.display = "block";
document.body.style.overflow = 'hidden';
document.getElementById("ab").classList.add("select");
document.getElementById("save").style.display = "none";
document.getElementById("add").style.display = "none";
document.getElementById("im").classList.remove('select');
document.getElementById("dw").classList.remove('select');
document.getElementById("hm").classList.remove('select');
}
}

function start() {
document.getElementById("start").style.display = "none";
}

let installPromptEvent;
const installLink = document.querySelector(".install-link");

// Install App functionality
window.addEventListener("beforeinstallprompt", event => {
    console.log("beforeinstallprompt Event");

    // Suppress automatic prompting
    event.preventDefault();

    // Stash the event so it can be triggered later.
    installPromptEvent = event;

    // Show the (hidden-by-default) install link
    installLink.hidden = false;
});

installLink.addEventListener("click", event => {
    console.log("Install App Link Click Event");
    event.preventDefault();

    // Update the install UI to remove the install button
    installLink.hidden = true;

    // Show the modal add to home screen dialog
    installPromptEvent.prompt();

    // Wait for the user to respond to the prompt
    installPromptEvent.userChoice.then(choice => {
        if (choice.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
        } else {
            console.log("User dismissed the A2HS prompt");
        }
        // Clear the saved prompt since it can't be used again
        installPromptEvent = null;
    });
});
