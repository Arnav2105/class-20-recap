var fixed;
var moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(300,200,40,70);
}

function draw() {
  background(255,255,255);  
  moving.y=mouseY;
  moving.x=mouseX;
  console.log(moving.y);
  console.log(fixed.y);
  console.log(moving.height/2);
  console.log(fixed.height/2);
 touching();

  drawSprites();
}
