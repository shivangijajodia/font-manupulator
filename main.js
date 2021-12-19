function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550,550);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function draw() {
    background("#151514");
fill("#CC5555");
square(noseX,noseY,difference);
}

function modelloaded() {
    console.log("model is loaded");

}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    
    }
}
