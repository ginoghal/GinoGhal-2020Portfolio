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
  if (v.style.display === "grid") {
    v.style.display = "none";
  } else {
    v.style.display = "grid";
  }
}

function graphicClick() {
  var g = document.getElementById("gg-Graphic");
  if (g.style.display === "grid") {
    g.style.display = "none";
  } else {
    g.style.display = "grid";
  }
}

function webClick() {
  var w = document.getElementById("gg-Web");
  if (w.style.display === "grid") {
    w.style.display = "none";
  } else {
    w.style.display = "grid";
  }
}

function uiClick() {
  var u = document.getElementById("gg-uiux");
  if (u.style.display === "grid") {
    u.style.display = "none";
  } else {
    u.style.display = "grid";
  }
}

var i = 0;
var images = [];
var time = 2000;

images[0] = "./public/images/boxingring.jpg";
images[1] = "./public/images/BasketballNetCinema4D.jpg";
images[2] = "./public/images/MapleLeafsMug2.jpg";
images[3] = "./public/images/pokeball2.jpg";
images[4] = "./public/images/SoccerNet.jpg";
images[5] = "./public/images/CanFlag.jpg";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

// AOS.refresh();
