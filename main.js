noseX = 0;
noseY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550)
    canvas.position(1000,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("Model Loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
function draw() {
    background("#bcf0f5");
}