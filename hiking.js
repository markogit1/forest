var otvori = document.getElementById("otvori")
var zatvori = document.getElementById("zatvori")
var pomocni = document.getElementById("pomocni")
var zas = document.getElementById("zas")
var ranac = document.getElementById("ranac")

otvori.onclick = function(){
    zas.style.opacity = "0.9";
    zas.style.visibility = "visible";
    ranac.style.top = "47%";
    zatvori.style.display = "block";
    otvori.style.display = "none"
  }
zatvori.onclick = function(){
    zas.style.opacity = "0";
    zas.style.visibility = "hidden";
    ranac.style.top = "50%";
    zatvori.style.display = "none";
    otvori.style.display = "block"
  }