var phiking = document.getElementById("phiking");
var counter = 1 ;

setInterval(() => {
    if(counter == "45"){
        clearInterval;
    }
    else{
    counter += 1;
    phiking.innerHTML = counter + "%";
    }
}, 40);

var pcamping = document.getElementById("pcamping");
var counter2 = 1 ;

setInterval(() => {
    if(counter2 == "55"){
        clearInterval;
    }
    else{
    counter2 += 1;
    pcamping.innerHTML = counter2 + "%";
    }
}, 38);