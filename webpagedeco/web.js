let img;

function preload() {
    img = loadImage('assets/ssu.jpeg');
}



function setup() {
    createCanvas(1000, 1000);
    background(255);
    fill('#00688F');
    noStroke();
    circle(50,49,25);
    rect(20,12,30,50);
    fill(255,255,255);
    noStroke();
    circle(50,23,25);
    
    
    fill('#00A4CA');
    rect(75,20,20,60);
    arc(75, 35, 20, 28, HALF_PI, -HALF_PI);
    fill(255);
    arc(75, 65, 20, 30, -HALF_PI, HALF_PI);
    fill(255);
    arc(95, 35, 20, 30, HALF_PI, -HALF_PI);
    fill('#00A4CA');
    arc(95, 65, 20, 28, -HALF_PI, HALF_PI);
    
    
    
    stroke(0);
    fill("#58C5C4");
    noStroke();
    rect(115,5,35,60);
    arc(115, 20, 20, 30, HALF_PI, -HALF_PI);
    fill(255);
    arc(115, 50, 20, 30, -HALF_PI, HALF_PI);
    
    
    fill('#00688F');
    noStroke();
    rect(165, 20, 25, 50);
    circle(177.5, 70, 25);
    
    
    fill('#00A4CA');
    rect(200, 5, 30, 70);
    fill(255);
    arc(200, 25, 15, 100, -HALF_PI, HALF_PI);
    
    
    stroke(0);
    strokeWeight(1);
    fill("#5A5B5D");
    line(20,100,240,100);
    line(20,140,240,140);
    
    
    
    fill("#5A5B5D");
    textSize(20);
    text("\nGlobal School of Media",22,100);
    
    
    fill('#00688F');
    rect(10,200,240,50);
    fill(255);
    text("About Global Media",20,232);
    
    fill('#00A4CA');
    rect(10,280,240,50);
    fill(255);
    text("Academic Program",20,312);
    
    fill('#58C5C4');
    rect(10,360,240,50);
    fill(255);
    text("Resources",20,392);
    
    
    fill('#00688F');
    rect(10,440,240,50);
    fill(255);
    text("News & Events",20,472);
    
    
    fill('#00A4CA');
    rect(10,520,240,50);
    fill(255);
    text("Community",20,552);
    
    
    
    
    

  }
  
  function draw(){
    image(img, 300, 10);
    
  }
  