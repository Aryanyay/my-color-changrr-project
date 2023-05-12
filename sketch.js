
function setup() {
  createCanvas(400,400);
  background(black);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 


  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background(green);
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background(yellow);
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background(red);
  }


  
  drawSprites();
}

