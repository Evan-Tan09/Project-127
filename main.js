songone = "";
songtwo = "";
function preload() {
    songone = loadSound("musicone.mp3");
    songtwo = loadSound("musictwo.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 40, 400, 400);

}
function play() {
    song.play();
}
function stop() {
    song.stop();
}