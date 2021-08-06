var bars = document.getElementById("bars")
var menu = document.getElementById("menu")

menu.style.right = "-100%";

bars.onclick = function(){
  if(menu.style.right == "0%"){
    menu.style.right = "-100%";
  }
  else{
    menu.style.right = "0%";
  }
}

var mesec = document.getElementById("mesec");

mesec.onclick = function(){
  document.body.classList.toggle("lightmode");
  if(document.body.classList.contains("lightmode")){
    mesec.classList.toggle("fa-sun");
    mesec.classList.remove("fa-moon");
  }else{
    mesec.classList.toggle("fa-moon");
    mesec.classList.remove("fa-sun");
  }
}

var mlink1 = document.getElementById("mlink1");
var mlink2 = document.getElementById("mlink2");
var mlink4 = document.getElementById("mlink4");
var mlink3 = document.getElementById("mlink3");

mlink1.onclick = function(){
  menu.style.right = "-100%";
}

mlink2.onclick = function(){
  menu.style.right = "-100%";
}

mlink3.onclick = function(){
  menu.style.right = "-100%";
}

mlink4.onclick = function(){
  menu.style.right = "-100%";
}