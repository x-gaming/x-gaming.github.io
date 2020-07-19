/*function for welcome.html*/
function start() {
    location.replace('./chapter_one.html');
    console.log("Tour gestartet");
}

var topic = 1;
var step = 0;
var maxSteps;
var list;
var lock = true; /*prevents user from skipping the explain-button*/

/*Remember, remove 1 on every Array to count correct */

function nextStep() {
    document.getElementById("btn_next").disabled = true;
    list = document.getElementsByTagName("OL")[topic - 1];
    /*counts li-items -> i = number of li-elements*/
    for (i = 0; i <= list.getElementsByTagName("LI").length; i++) {
        maxSteps = i;
    }
    list.getElementsByTagName("LI")[step].style.display = "list-item";

    step++;

    /*just for updating the stats*/
    document.getElementById("step").innerHTML = step;
    document.getElementById("maxSteps").innerHTML = maxSteps;
    document.getElementById("topic").innerHTML = topic;
    document.getElementById("buttons").style.gridRowStart = topic;
    lock = false;
}

function explain() {
    if (!lock) {
        list.getElementsByClassName("explanation")[step - 1].style.display = "block";
        document.getElementById("btn_next").disabled = false;
        if (step >= maxSteps) {
            step = 0;
            topic++;
        }
        lock = true;
    }
}