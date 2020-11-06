var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1100, 200, 50, height/2);
  wall.shapeColor = "black";

  speed = random(55,90);
  weight = random(400,1500);
  
  
}

function draw() {
  background("purple"); 
  car.velocityX = speed;
  
if(wall.x-car.x < car.width/2 + wall.width/2){

  car.velocityX = 0;

  var deformation = 0.5*weight*speed*speed/22500;

  if(deformation > 180){
     car.shapeColor = "garnet";
  }
  if(deformation < 80){
     car.shapeColor = "cyan";
  }
  if(deformation < 180 && deformation > 100){
     car.shapeColor = "green";
  }
  console.log(deformation);
}
  drawSprites();
}