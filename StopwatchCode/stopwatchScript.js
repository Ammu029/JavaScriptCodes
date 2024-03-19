let [seconds, minutes, hours] = [0, 0, 0];

let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function resetWatch(){
    clearInterval(timer);

    let h = '00';
    let m = '00';
    let s = '00';
  //  [seconds, minutes, hours]
    displayTime.innerHTML =  h + ":" + m + ":" + s
}

function watchStop(){
    clearInterval(timer);
}