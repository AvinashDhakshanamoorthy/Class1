var box;

function setup() {
  createCanvas(500,500);
  box = createSprite(100,100,50,50);
}

function draw() 
{
   background(3,2,2);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background('pink')
    box.position.x = box.position.x +4;
    box.shapeColor = color("white")
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow")
    box.position.x= box.position.x -4;
    box.shapeColor = color("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("brown")
    box.position.y = box.position.y - 4;
    box.shapeColor = color("gray") 
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("black")
    box.position.y = box.position.y + 4;
    box.shapeColor = color("white");
  }

  drawSprites();
}




