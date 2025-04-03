let knives = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    push();
    translate(200, 200); // Changed to translate to the center of the face
    rotate(radians(frameCount));

    fill(255, 204, 153);
    noStroke();
    ellipse(-90, 0, 40, 60); 
    ellipse(90, 0, 40, 60); 
    
    fill(255, 220, 185);
    noStroke();
    ellipse(0, 0, 190, 220);
  
    fill(255); 
    ellipse(-50, -30, 50, 25);
    ellipse(50, -30, 55, 25);
    
    fill(0);
    ellipse(-50, -30, 25, 25); 
    ellipse(50, -30, 25, 25); 
    arc(-50, -55, 40, 15, PI, 0);
    arc(50, -55, 40, 15, PI, 0); 
    noStroke();
    
    fill(240, 200, 165);
    arc(-50, -40, 40, 15, PI, 0);
    triangle(-5, 30, 5, 30, 0, 60);

    noFill();
    stroke(0);
    strokeWeight(3);
    arc(0, 60, 50, 20, 0, PI);
    strokeWeight(5);
    bezier(-75, -130, -130, -120, -50, -40, -85, -50);
    bezier(-70, -130, -125, -120, -45, -40, -80, -50);  
    bezier(-65, -130, -120, -120, -40, -40, -75, -50);
    bezier(-60, -130, -115, -120, -35, -40, -70, -50);
    bezier(-55, -130, -110, -120, -30, -40, -65, -50);
    bezier(-50, -130, -105, -120, -25, -40, -60, -50); 
    bezier(-45, -130, -100, -120, -20, -40, -55, -50);
    bezier(-40, -130, -95, -120, -15, -40, -50, -50);
    bezier(-35, -130, -90, -120, -10, -40, -45, -50);
    bezier(-30, -130, -85, -120, -5, -40, -40, -50);
    bezier(-25, -130, -80, -120, 0, -40, -35, -50);
    bezier(-20, -130, -75, -120, 5, -40, -30, -50);
    bezier(-15, -130, -70, -120, 10, -40, -25, -50);
    bezier(-10, -130, -65, -120, 15, -40, -20, -50);
    bezier(-5, -130, -60, -120, 20, -40, -15, -50);
    bezier(0, -130, -55, -120, 25, -40, -10, -50);
    bezier(5, -130, -50, -120, 30, -40, -5, -50);
    bezier(10, -130, -45, -120, 35, -40, 0, -50);
    bezier(15, -130, -40, -120, 40, -40, 5, -50);
    bezier(20, -130, -35, -120, 45, -40, 10, -50);
    bezier(25, -130, -30, -120, 50, -40, 15, -50);
    bezier(30, -130, -25, -120, 55, -40, 20, -50);
    bezier(35, -130, -20, -120, 60, -40, 25, -50);
    bezier(40, -130, -15, -120, 65, -40, 30, -50);
    bezier(45, -130, -10, -120, 70, -40, 35, -50);
    bezier(50, -130, -5, -120, 75, -40, 40, -50);
    bezier(55, -130, 0, -120, 80, -40, 45, -50);
    bezier(60, -130, 5, -120, 85, -40, 50, -50);
    bezier(65, -130, 10, -120, 90, -40, 55, -50);
    bezier(70, -130, 15, -120, 95, -40, 60, -50);
    bezier(75, -130, 20, -120, 100, -40, 65, -50);
    bezier(60, -130, 115, -120, 35, -40, 160, -50);
    bezier(65, -130, 120, -120, 40, -40, 160, -50);
    bezier(70, -130, 125, -120, 45, -40, 160, -50);
    bezier(75, -130, 130, -120, 50, -40, 160, -50);
    bezier(80, -130, 135, -120, 55, -40, 160, -50);
    bezier(85, -130, 140, -120, 60, -40, 160, -50);
    bezier(90, -130, 145, -120, 65, -40, 160, -50);
    bezier(95, -130, 150, -120, 70, -40, 160, -50);
    bezier(100, -130, 155, -120, 75, -40, 160, -50);
    bezier(105, -130, 160, -120, 80, -40, 160, -50);
    pop();


    for (let knife of knives) {
        knife.update();
        knife.display();
    }
}

function keyPressed() {
    if (key === ' ') {
        knives.push(new Knife(150, height - 40));
    }
}

class Knife {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = -4;
        this.stuck = false;
    }

    update() {
        if (!this.stuck) {
            this.y += this.speed;
        }
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(PI / 2);
        fill(150);
        rect(-4, 0, 8, 32);
        fill(100);
        rect(-4, 32, 8, 8);
        pop();
    }
}
