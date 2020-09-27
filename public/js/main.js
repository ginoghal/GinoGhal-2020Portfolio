AOS.init({ duration: 1500 });

var menu = document.getElementById("menu");
var closeIcon = document.getElementById("closeIcon");

menu.addEventListener("click", handleMenu);

function handleMenu(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
}

function videoClick() {
  var v = document.getElementById("gg-Video");
  if (v.style.display === "block") {
    v.style.display = "none";
  } else {
    v.style.display = "block";
  }
}

function graphicClick() {
  var g = document.getElementById("gg-Graphic");
  if (g.style.display === "block") {
    g.style.display = "none";
  } else {
    g.style.display = "block";
  }
}

function webClick() {
  var w = document.getElementById("gg-Web");
  if (w.style.display === "block") {
    w.style.display = "none";
  } else {
    w.style.display = "block";
  }
}

function uiClick() {
  var u = document.getElementById("gg-uiux");
  if (u.style.display === "block") {
    u.style.display = "none";
  } else {
    u.style.display = "block";
  }
}
