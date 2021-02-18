var icons = ["fas fa-basketball-ball", "fas fa-bomb", "fas fa-bone", "fas fa-bus"];
var fontSize = 5;
var i = 0;
var deg = 0;
var object = {icon:"",size:"",color:""};

/*buttons*/
document.querySelector("#btn-red").addEventListener("click", function(){
  return changeColor("red");
});
document.querySelector("#btn-green").addEventListener("click", function(){
  return changeColor("green");
});
document.querySelector("#btn-blue").addEventListener("click", function(){
  return changeColor("blue");
});
document.querySelector("#btn-bigger").onclick = function myFunction() {
  setSize("bigger");
};
document.querySelector(".btn-smaller").onclick = function myFunction() {
  setSize("smaller");
};
/*buttons + functions*/
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
/*functions*/
function changeColor(color) {
  document.querySelector("#object").style.color = color;
  document.querySelector("#color-text").innerText = "Color: " + color;
  document.querySelector("#code-block").innerText = "document.querySelector(\"#btn-" +  color +"\").addEventListener(\"click\", function(){return changeColor(\"" +  color + "\");}); function changeColor(color) {document.querySelector(\"#object\").style.color = color;}";
}
function setSize(size){
if (size == "bigger"){
  fontSize++;
  document.querySelector("#object").style.fontSize = fontSize + "rem";
  document.querySelector("#size-text").innerText = "Size: " + fontSize + "rem";
}
else if (size == "smaller"){
  if (fontSize > 5) {
    fontSize--;
    document.querySelector("#object").style.fontSize = fontSize + "rem";
    document.querySelector("#size-text").innerText = "Size: " + fontSize + "rem";
  } else {
    document.querySelector("#object").style.fontSize = 5 + "rem";
    document.querySelector("#size-text").innerText = "Size: 5rem (You can't make it smaller)";
  }
}
document.querySelector("#code-block").innerText = "document.querySelector(\"#btn-" + size +"\").onclick = function myFunction() { setSize(\"" + size +"\");};function setSize(size){if (size == \"bigger\"){fontSize++; document.querySelector(\"#object\").style.fontSize = fontSize + \"rem\";} else if (size == \"smaller\"){ if (fontSize > 5) {fontSize--; document.querySelector(\"#object\").style.fontSize = fontSize + \"rem\";} else { document.querySelector(\"#object\").style.fontSize = 5 + \"rem\";}}}";
}

/*form*/

/*form button*/
document.getElementById("generate-btn").addEventListener("click",generateObject);
/*get object info function*/
function generateObject(){
  /*get icon*/
  thisIcon = document.querySelectorAll('input[name="obj-f"]');
  for(var i=0; i<thisIcon.length;i++){
    if(thisIcon[i].checked){
      object.icon = thisIcon[i].value;
    }
  }
/*get size*/
object.size = document.getElementById("size-gen").value;
/*get color*/
  thisColor = document.querySelectorAll('input[name="color-f"]');
  for(var j=0; j<thisColor.length;j++){
    if(thisColor[j].checked){
      object.color = thisColor[j].value;
    }
  }
console.log(object);
printObject();
}
/*print object function*/
function printObject(){
  document.getElementById("object-div").innerHTML = "<i id=\"form-object\" class=\"fas fa-" + object.icon +"\"></i>";
  document.getElementById("form-object").style.color = object.color;
  document.getElementById("form-object").style.fontSize = object.size + "rem";
}
