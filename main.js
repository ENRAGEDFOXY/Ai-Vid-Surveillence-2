video="";
status1="";

function preload(){
    video=createVideo('afton.mp4');
} 
 
function setup(){
    canvas=createCanvas(380,280);
    canvas.center();
    video.hide();
}

function draw(){
    image(video, 0, 0, 380, 280);
}

function start(){
    ObjectDetection=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Detecting Objects....";
}

function modelloaded(){
    console.log("Model Is Loaded 👍");
    status1=true
    video.loop();
    video.speed(1);
    video.volume(0);
}