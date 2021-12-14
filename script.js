function mini() {
    document.getElementById("iplay").style.height = "92px";
    document.getElementById("mini").disabled = true;
    document.getElementById("grand").disabled = false; 
    document.getElementById("iplay").scrolling = "no"
    document.body.style.overflow = 'visible';
    document.getElementById("mini").style.top = "87%"
    document.getElementById("grand").style.top = "87%"
    document.getElementById("spacei").style.display = "block"
  }
  function grand() {
    document.getElementById("iplay").style.height = "94.2%";
    document.getElementById("grand").disabled = true;
    document.getElementById("mini").disabled = false;
    document.getElementById("iplay").scrolling = "yes"
      document.body.style.overflow = 'hidden';
    document.getElementById("mini").style.top = "8%"
    document.getElementById("grand").style.top = "8%"
  }

//Popup
  function save() {
var div = document.getElementById("save");
if (div.style.display === "block") {
div.style.display = "none";
} else {
div.style.display = "block";
document.getElementById("add").style.display = "none";
document.getElementById("about").style.display = "none";
}
}
function add() {
var div = document.getElementById("add");
if (div.style.display === "block") {
div.style.display = "none";
} else {
div.style.display = "block";
document.getElementById("save").style.display = "none";
document.getElementById("about").style.display = "none";
}
}
function about() {
var div = document.getElementById("about");
if (div.style.display === "block") {
div.style.display = "none";
} else {
div.style.display = "block";
document.getElementById("save").style.display = "none";
document.getElementById("add").style.display = "none";
}
}

function start() {
document.getElementById("start").style.display = "none";
}
