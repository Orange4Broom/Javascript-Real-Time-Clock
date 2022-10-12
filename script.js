function clock() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    document.getElementById("timer").innerHTML = time; 
}
setInterval(clock, 1000);