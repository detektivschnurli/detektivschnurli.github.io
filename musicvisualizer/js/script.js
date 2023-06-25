var song

function preload() {
    song = loadSound('audio.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    song.play();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
}
