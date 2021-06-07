var fixR,movR
function setup() {
  createCanvas(1200,800);
  fixR=createSprite(400, 200, 50, 30);
  movR=createSprite(400, 200, 30, 50);
  fixR.shapeColor="green"
  movR.shapeColor="green"
}
fix
function draw() {
  background(0,0,0);  
  movR.x=mouseX
  movR.y=mouseY
if(movR.x-fixR.x<movR.width/2+fixR.width/2 &&fixR.x-movR.x <movR.width/2+fixR.width/2 &&
  movR.y-fixR.y<movR.height/2+fixR.height/2 &&fixR.y-movR.y <movR.height/2+fixR.height/2 ) {
  
   
  fixR.shapeColor="red"
  movR.shapeColor="red"
}
else{
  fixR.shapeColor="green"
  movR.shapeColor="green"
}



  drawSprites();
}