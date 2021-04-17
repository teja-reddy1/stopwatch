var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var lap = document.querySelector("#lap");

var box = document.querySelector(".Header");
var laps = document.querySelector(".laps");

//variables
var sec = 0;
var min = 0;
var hrs = 0;
var time = 0;

timer = null;

// box.innerHTML = time;

function makeTwoDigits(number) {
    // display double digits for numbers less than 10
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

function handle() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        hrs++;
    }
    time = makeTwoDigits(hrs) + ":" + makeTwoDigits(min) + ":" + makeTwoDigits(sec);
    box.innerHTML = time;

}

start.addEventListener("click", function() {
    timer = setInterval(handle, 1000);
});

stop.addEventListener("click", function() {
    clearInterval(timer);
});

lap.addEventListener("click", function() {
    var temp = laps.innerHTML;
    temp += ("<br>" + time);
    laps.innerHTML = temp;
});