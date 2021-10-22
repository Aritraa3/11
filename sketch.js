var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale = 1.2
  boy = createSprite(180,300,20,20)
  boy.addAnimation("running",boyImg)
  boy.scale = 0.05
// Moving background
if( path.y > 400){
  path.y = path.height/2
}

invisibleBoundary = createSprite(390,200,400,10)
invisibleBoundary.visible = false

invisibleBoundary = createSprite(0,200,400,10)
invisibleBoundary.visible = false

}

function draw() {
  background(0);
  
  drawSprites();
}
