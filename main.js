
function setup() {
    canvas=createCanvas(550,550);
    canvas.position(560, 150);
    video=createCapture(VIDEO);
    video.size(550, 550);
    posenet=ml5.poseNet(video, modelLoded);
    posenet.on('pose', gotPose);
}
function draw() {
    background('#ffff00');
}
function modelLoded() {
    console.log("Its working");
}
function gotPose(results) {
    if(results.length>0) {
        console.log(results);
    }
}