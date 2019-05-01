
let timer = document.createElement('h1'),
timerUpdate = setInterval(timerShow, 1000);

document.body.appendChild(timer);



function timerShow() {
    let time = new Date(),
    hours = time.getHours(),
    min = time.getMinutes(),
    sec = time.getSeconds();
    function fixDate() {
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
    }
    fixDate();
    timer.innerHTML = hours + ':' + min + ":" + sec;
}



