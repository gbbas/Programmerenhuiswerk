let score = 0;
let Pos = 0;

function showGreenLights() {
    let num = Math.randomRange(0, 1);
    console.log(num);
    light.setAll(Colors.Black);
    if (num == 0) {
        for (let i = 0; i < 5; i++) {
            light.setPixelColor(i, Colors.Green);
        }
    }
    else if (num == 1) {
        for (let i = 5; i < 10; i++) {
            light.setPixelColor(i, Colors.Green);
        }
    }
    Pos = num;
}

function wrongAnswer() {
    light.setAll(Colors.Black);
    light.setAll(Colors.Red);
    score = 0;
    control.waitMicros(200000);
    showGreenLights();
}

function rightAnswer() {
    light.setAll(Colors.Black);
    score++;
    if (score == 10) {
        light.showAnimation(light.rainbowAnimation, 500)
    }
    for (let i = 0; i < score; i++) {
        light.setPixelColor(i, Colors.Blue);
    }
    control.waitMicros(200000);
    showGreenLights();
}

input.onGesture(Gesture.TiltLeft, function () {
    if (Pos == 0) {
        rightAnswer();
    }
    else {
        wrongAnswer();
    }
});

input.onGesture(Gesture.TiltRight, function () {
    if (Pos == 1) {
        rightAnswer();
    }
    else {
        wrongAnswer();
    }
});

showGreenLights();
