var ball;

function setup() {
  createCanvas(800,600);
  ball=createSprite(200,200,20,20);
}

function draw() 
{
  background("yellow");
  if (keyDown(RIGHT_ARROW)){
    ball.x=ball.x+5;
  }
  if (keyDown(LEFT_ARROW)){
    ball.x=ball.x-5;
  }
  if (keyDown(DOWN_ARROW)){
    ball.y=ball.y+5;
  }
  if (keyDown(UP_ARROW)){
    ball.y=ball.y-5;
  }
  drawSprites();
}




