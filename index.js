const min = document.getElementById("min");
const sec = document.getElementById("sec");
let a = 0;



document.getElementById("reset").onclick = function (){
   
    sec.textContent = "00";
    a=a+1;
    setTimeout(function(){
        let secone = parseInt(sec.textContent);
        sec.textContent = secone - 1;
        a=a-1;
    }, 1000)
}

document.getElementById("stop").onclick = function (){
   
    
    a=a+1;
    setTimeout(function(){
        let secone = parseInt(sec.textContent);
        sec.textContent = secone - 1;
       
    }, 1000)
    if(sec.textContent===-1){
    let secone = parseInt(sec.textContent);
    sec.textContent = secone + 1;
    if(sec.textContent===-1){
    let secone = parseInt(sec.textContent);
    sec.textContent = secone + 1;
}
}
}

document.getElementById("start").onclick = function (){
    
    function loop(){
        setTimeout(function(){
        
        let secone = parseInt(sec.textContent); // Haal de huidige waarde op en converteer naar een getal
        sec.textContent = secone + 1;
        if(sec.textContent < 60 && a===0) {
            loop();
        }
    }, 1000)
}
     loop();
}




































/*
document.getElementById("reset").onclick = function (){
    sec.textContent = "00";
}

document.getElementById("start").onclick = function (){
    
    function loop(){
        setTimeout(function(){
        
        let secone = parseInt(sec.textContent); // Haal de huidige waarde op en converteer naar een getal
        sec.textContent = secone + 1;
        if(sec.textContent < 60) {
            loop();
        }
    }, 1000)
}
    loop();
}

document.getElementById("stop").onclick = function (){
    let secone = parseInt(sec.textContent); // Haal de huidige waarde op en converteer naar een getal
    sec.textContent = secone + 1;
}



*/




