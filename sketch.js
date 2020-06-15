var wall1,wall2,wall3,wall4;
var bullet1,bullet2,bullet3,bullet4;
var speed,weight;
var breaker1,breaker2,breaker3;
var thickness;

function setup() {
  createCanvas(1600,800);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet1=createSprite(50,100,50,10);
  wall1=createSprite(1400, 100, thickness, 100);
  bullet1.shapeColor="yellow";
  wall1.shapeColor="yellow";
  bullet1.velocityX=speed;

  bullet2=createSprite(50,300,50,10);
  wall2=createSprite(1400, 300, thickness, 100);
  bullet2.shapeColor="green";
  wall2.shapeColor="green";
  bullet2.velocityX=speed;

  bullet3=createSprite(50,500,50,10);
  wall3=createSprite(1400, 500, thickness, 100);
  bullet3.shapeColor="blue";
  wall3.shapeColor="blue";
  bullet3.velocityX=speed;

  bullet4=createSprite(50,700,50,10);
  wall4=createSprite(1400, 700, thickness, 100);
  bullet4.shapeColor="indigo";
  wall4.shapeColor="indigo";
  bullet4.velocityX=speed;

  breaker1=createSprite(800,200,1600,10);
  breaker1.shapeColor="black";

  breaker2=createSprite(800,400,1600,10);
  breaker2.shapeColor="black";

  breaker3=createSprite(800,600,1600,10);
  breaker3.shapeColor="black";
}

function draw() {
 background("orange"); 
 hasCollided();
 drawSprites();
}

function hasCollided(){
  bullet1RightEdge=bullet1.x+bullet1.width;
  bullet2RightEdge=bullet2.x+bullet2.width;
  bullet3RightEdge=bullet3.x+bullet3.width;
  bullet4RightEdge=bullet4.x+bullet4.width;

  wall1LeftEdge=wall1.x;
  wall2LeftEdge=wall2.x;
  wall3LeftEdge=wall3.x;
  wall4LeftEdge=wall4.x;

  if(bullet1RightEdge>=wall1LeftEdge||bullet2RightEdge>=wall2LeftEdge||bullet3RightEdge>=wall3LeftEdge||bullet4RightEdge>=wall4LeftEdge){
  bullet1.velocityX=0;
  bullet2.velocityX=0;
  bullet3.velocityX=0;
  bullet4.velocityX=0;

  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if(damage>10)
  {
   wall1.shapeColor=color(255,0,0);
   wall2.shapeColor=color(255,0,0);
   wall3.shapeColor=color(255,0,0);
   wall4.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
   wall1.shapeColor=color(0,255,0);
   wall2.shapeColor=color(0,255,0);
   wall3.shapeColor=color(0,255,0);
   wall4.shapeColor=color(0,255,0);
  }
  }
}