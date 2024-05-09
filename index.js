const count1 = document.getElementById("count");



document.getElementById("up").onclick = function(){
    let counter = parseInt(count1.textContent);
    count1.textContent = counter + 1;
    console.log("it wroks up")
}

document.getElementById("down").onclick = function(){
    let counter = parseInt(count1.textContent);
    count1.textContent = counter - 1;
    console.log("it wroks down")
}

document.getElementById("reset").onclick = function(){
    let counter = parseInt(count1.textContent);
    count1.textContent = "0";
    /* alert("reset to 0"); */
}















