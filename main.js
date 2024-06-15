noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function preload(){
}

function setup(){
    video= createCapture(VIDEO);
    video.size(500,500);
    canvas= createCanvas(500,400);
    canvas.position(700,150);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("rgba(0,20,0,0)");
    document.getElementById("size").innerHTML="Width and height of the square="+difference+"px";
    fill("blue");
    stroke("black");
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("The model is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("The x coordinate of nose="+noseX+"and the y coordinate of nose="+noseY);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
        console.log("Left wrist X="+leftWristX+", Right wrist X="+ rightWristX+"and Difference="+ difference);
    }
    }



