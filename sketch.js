var jaxon, jaxon_running;
var path, pathImage;
var invisiblePath;

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png");

  pathImage = loadImage("path.png");
  
}
function setup(){
  createCanvas(400,400);
  //create sprites here

path = createSprite(200,200);
path.addImage(pathImage);
path.scale =1.2;
path.velocityY = 4;

jaxon = createSprite(100,350,20,50);
jaxon.addAnimation("running", jaxon_running);
jaxon.scale = 0.09;


invisiblePath = createSprite(200,190,400,10);
invisiblePath.visible=false;

}

function draw() {
  background(0);

  if (path.y > 400) {
    path.y = height / 2;
  }


 jaxon.x = mouseX;
  

  jaxon.collide(invisiblePath);

  drawSprites();
}  
