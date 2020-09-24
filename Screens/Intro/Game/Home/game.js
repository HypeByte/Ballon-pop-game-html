var scratch = document.getElementById("scratch");
var speed = 1;
var score = 0;
var coins = 0;
var keyspeed = 50;
var scoreE = document.createElement("h1");
document.body.appendChild(scoreE);
var y = 0;
var balloon = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
var random;
var x2;

function randomF() {

    random = Math.floor(Math.random() * 1550) - 50;
    x2 = random;
    balloon.setAttribute("cx", x2);
};

randomF();

function generateBalloon() {




    function set() {

        y = y + speed;
        if (x2 > x && y == 695 && (x + 75) > x2) {
            score = score + 1;
            scoreE.innerText = "Score: " + score;
            y = 0;
            randomF();

        }


        if (x2 > (x + 75) && y == 696 || x2 < x && y == 696) {
            coins = coins + score;
            scoreE.innerText = "You lost :(  Coins Earned: " + coins;
            var rths = document.createElement("a");
            rths.innerText = "Click me to go back to home page"
            rths.setAttribute("href", "home.html");
            document.body.appendChild(rths);
        }

        balloon.setAttribute("cy", y);

    }
    set();
    var int = setInterval(set, 1);

    balloon.setAttribute("rx", 25);
    balloon.setAttribute("ry", 25);

    balloon.setAttribute("id", "balloon");
    scratch.appendChild(balloon);

}


generateBalloon();

var x = 775;

function character() {
    var body = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    body.setAttribute("y", 695);
    body.setAttribute("x", x);
    body.setAttribute("width", 75);
    body.setAttribute("height", 740 - 695);
    body.setAttribute("id", "player")
    window.addEventListener("keydown", Keypress, false);

    function Keypress(key) {
        if (key.keyCode == "68") {
            x = x + keyspeed;
            body.setAttribute("x", x);
        }
        if (key.keyCode == "65") {
            x = x - keyspeed;
            body.setAttribute("x", x);
        }

    }
    scratch.appendChild(body);

}

character();
var rect = document.querySelector("#player");
var Cscore = document.querySelector("h1")
var Colors = ["#613DC1", "#FB4D3D", "#00A7E1", "#6EFF51", "#FFF47C"]
var i = -1;

function ColorSwitch() {
    i = i + 1;
    if (i === 5) {
        i = 0;
    }
    Cscore.style.color = Colors[i];
    rect.style.fill = Colors[i];
};

ColorSwitch();

var int = setInterval(ColorSwitch, 1000);
var pause_button = document.getElementById("pause");
var unpause_button = document.getElementById("unpause");

pause_button.onclick = function() {
    speed = 0;
    keyspeed = 0;
}
unpause_button.onclick = function() {
    speed = 1;
    keyspeed = 50;
}
 
