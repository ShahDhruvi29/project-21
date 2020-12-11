var wall,thickness;
var bullet,speed,weight;
var lbullet,lwall;
//var bulletRightEdge,wallLeftEdge;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80) 
  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,52)
  bullet=createSprite(0,200,40,5)
  bullet.velocityX =5;
  bullet.shapeColor=color("white")
}
function draw() {
  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if (damage>10) 
    {
      wall.shapeColor=color(255,0,0)
      //red
    }
    if (damage<10) 
    {
      wall.shapeColor=color(0,255,0)
      //green
    }
  }
  background("black"); 
  wall.display()
  bullet.display();
 drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lwall.width
  wallLeftEdge=lwall.x
    if (bulletRightEdge>=wallLeftEdge) {
      return true
    }
    return false
}