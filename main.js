function preload()
{

}

function setup()
{
canvas=createCanvas(550, 550);
canvas.center();
video=createCapture(VIDEO);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{

}

function modelLoaded()
{
    console.log("PoseNet is loaded");
}

function gotPoses(results)
{
   if(results.length>0)
   {
    console.log(results);
   }
}