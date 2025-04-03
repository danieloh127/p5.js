let xPos, xDir, diam;
let yPos, yDir;
let speed;
let padX
let padWidth


function setup() {
  createCanvas(600,600);
  speed = 4;
  xPos = width / 2;
  xDir = speed;
  yPos = height / 2;
  yDir = speed;
  diam = 80;
  ballColor = color(0,0,0)
  
  padWidth = 200
}

function draw() {
    background(150);
  

    fill(ballColor);
    ellipse(xPos, yPos, diam, diam);
    xPos = xPos + xDir;
    yPos = yPos + yDir;
  
  padX = mouseX - padWidth/2;
  rect(padX, height - 30, padWidth, 30)

  if ( xPos - diam/2 < 0 ||  xPos + diam/2 > width) {
    xDir = xDir * -1; 

  }
  if ( yPos - diam/2 < 0 || yPos + diam/2 > height) {
    yDir *= -1;
  } 

  
    if (xPos > padX && yPos > height - 30 - diam/2) {
      yDir *= -1; 
      ballColor = color(random(255), random(255), random(255));
      
    }
  
}
