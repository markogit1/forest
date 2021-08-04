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