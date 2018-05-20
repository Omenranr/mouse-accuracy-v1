var isGameOn = false;
var circles = [];
var score = 0;
var time = 20;
var timeClicked = 0;
var recu = false;

function mouseClicked() {
    timeClicked += 1;
}

function startGame() {
    isGameOn = true;
    recu = true;
}

function setup() {
    createCanvas(document.body.offsetWidth, document.body.offsetHeight);
    background("#c3c3c3");
    circles.push(new Circle());
    var timer = select("#timer");
    var score = select("#score");
    var missClick = select("#missclick");
    timer.html("CountDown: " + time);

    function timeIt() {
        if (time > 0 && recu == true) {
            time--;
            timer.html("CountDown: " + time);
        }
    }
    setInterval(timeIt, 1000);}

function endGame() {
    $(".mainMenu").show();
    isGameOn = false;
    document.getElementById("missclick").innerHTML = "MissClick: " + (timeClicked - score);
    timeClicked = 0;
    time = 20;
    score= 0;
    settings=[100,30];
    recu = false;
}

function draw() {
    if (time == 0) {
        endGame();
    }
    if (isGameOn) {
        background("#c3c3c3");
        if (frameCount % settings[0] == 0) {
            circles.push(new Circle());
        }
        for (var i = 0; i < circles.length; i++) {
            circles[i].show();
            if (circles[i].mouseIn()) {
                fill(0, 255, 0);
                ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
            }
            circles[i].update();
            if (circles[i].r < -0.01) {
                circles.splice(i, 1);;
            }


            if (circles != []) {
                if (circles[i].mouseIn() && mouseIsPressed) {
                    circles.splice(i, 1);;
                    score += 1;
                    document.getElementById("score").innerHTML = "Score : " + score;
                }
            }



        }
    }

}
