function preload(){
}
function setup(){
  canvas = cereateCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(300,300);
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotposes);
}
function gotposes(results){
  if(results.length > 0){
    console.log("Results");
    console.log("Munchi X ="+results[0].pose.vi.x);
    console.log("Munchi Y ="+results[0].pose.vi.y);
  }

}
function modelLoaded(){
  console.log("Posenet is initialized");
}
function draw(){
  image(video,0,0,500,600); 
}
function takeSnapshot(){
  save('munchi.png');
}