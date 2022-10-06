nosex=0;
nosey=0;

function preload(){
    postimage=loadImage('https://i.postimg.cc/rwfZkcZD/rick-roll-rick-rolled.gif');
}

function setup(){
    canvas=createCanvas(325,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(325,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet is working");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-75;
        nosey=results[0].pose.nose.y-60;
        console.log("nose_x= "+ results[0].pose.nose.x);
        console.log("nose_y= "+ results[0].pose.nose.y);
    }


    
}

function draw(){
    image(video,0,0,325,300);
    image(postimage,nosex,nosey,150,150);
}

function take_snapshot(){
    save("filtered_image.gif");
}