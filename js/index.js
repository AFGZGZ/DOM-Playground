var icons = ["fas fa-basketball-ball", "fas fa-bomb", "fas fa-bone", "fas fa-bus"];
var fontSize = 5;
var i = 0;
var deg = 0;

document.querySelector("#btn-red").onclick = function myFunction() {

  document.querySelector("#object").style.color = "red";
  document.querySelector("#color-text").innerText = "Color: Red";
  document.querySelector("#code-block").innerText = "document.querySelector(\"#btn-red\").onclick = function myFunction() {document.querySelector(\"#object\").style.color =\"red\";}";
};

document.querySelector("#btn-green").onclick = function myFunction() {

  document.querySelector("#object").style.color = "green";
  document.querySelector("#color-text").innerText ="Color: Green";
  document.querySelector("#code-block").innerText = "document.querySelector(\"#btn-green\").onclick = function myFunction() {document.querySelector(\"#object\").style.color =\"green\";}";
};

document.querySelector("#btn-blue").onclick = function myFunction() {
  document.querySelector("#object").style.color = "blue";
  document.querySelector("#color-text").innerText ="Color: Blue";
  document.querySelector("#code-block").innerText = "document.querySelector(\"#btn-blue\").onclick = function myFunction() {document.querySelector(\"#object\").style.color = \"blue\";}";
};

document.querySelector("#btn-bigger").onclick = function myFunction() {
  fontSize++;
  document.querySelector("#object").style.fontSize = fontSize + "rem";
  document.querySelector("#size-text").innerText = "Size: " + fontSize + "rem";
  document.querySelector("#code-block").innerText = "var fontSize = 5; document.querySelector(\"#btn-bigger\").onclick = function myFunction() {fontSize++; document.querySelector(\"#object\").style.fontSize = fontSize + \"rem\";};";
};

document.querySelector(".btn-smaller").onclick = function myFunction() {
  if (fontSize > 5) {
    fontSize--;
    document.querySelector("#object").style.fontSize = fontSize + "rem";
    document.querySelector("#size-text").innerText = "Size: " + fontSize + "rem";
  } else {
    document.querySelector("#object").style.fontSize = 5 + "rem";
    document.querySelector("#size-text").innerText = "Size: 5rem (You can't make it smaller)";
  }
  document.querySelector("#code-block").innerText = "document.querySelector(\".btn-smaller\").onclick = function myFunction() { if (fontSize > 5) {fontSize--; document.querySelector(\"#object\").style.fontSize = fontSize + \"rem\"; } else { document.querySelector(\"#object\").style.fontSize = 5 + \"rem\";}";
};

document.querySelector("#btn-change").onclick = function myFunction() {
  if (i < icons.length) {
    document.querySelector("#object").setAttribute("class", icons[i]);
    i++;
  } else {
    i = 0;
    document.querySelector("#object").setAttribute("class", "fas fa-bug");
  }
  document.querySelector("#code-block").innerText = "var icons = [\"fas fa-basketball-ball\", \"fas fa-bomb\", \"fas fa-bone\", \"fas fa-bus\"]; document.querySelector(\"#btn-change\").onclick = function myFunction() { if (i < icons.length) { document.querySelector(\"#object\").setAttribute(\"class\", icons[i]); i++;} else { i = 0; document.querySelector(\"#object\").setAttribute(\"class\", \"fas fa-bug\");} }";
};

document.querySelector("#btn-rotate").onclick = function myFunction() {
  deg = deg + 45;
  document.querySelector("#object").style.transform = "rotate(" + deg + "deg)";
  document.querySelector("#rotation-text").innerText = "Rotation: " + deg;
  document.querySelector("#code-block").innerText = "var deg = 0; document.querySelector(\"#btn-rotate\").onclick = function myFunction() { deg = deg + 45; document.querySelector(\"#object\").style.transform = \"rotate(\" + deg + \"deg)\";}";
};
