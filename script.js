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
    document.getElementById("iplay").style.height = "94%";
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