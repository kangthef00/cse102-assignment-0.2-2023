let locatio,loca;  // Location of shape
let velocity,velo;  // Velocity of shape
let gravity,grav;   // Gravity acts at the shape's acceleration

function setup() {
  createCanvas(640,360);
  locatio = createVector(100,100);
  velocity = createVector(1.5,2.1);
  gravity = createVector(0,0.2);
  

  loca = createVector(50,50);
  velo = createVector(2.1,1.5);
  grav = createVector(0,0.3);
    
}

function draw() {
  background(0);
  
  // Add velocity to the location.
  locatio.add(velocity);
  loca.add(velo);
  // Add gravity to velocity
  velocity.add(gravity);
  velo.add(grav);
  
  // Bounce off edges
  if ((locatio.x > width) || (locatio.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  
  if (locatio.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity.y = velocity.y * -0.95; 
    locatio.y = height;
  }
  // Bounce off edges
  if ((loca.x > width) || (loca.x < 0)) {
    velo.x = velo.x * -1;
  }
  
  if (loca.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velo.y = velo.y * -0.95; 
    loca.y = height;
  }

  // Display circle at location vector
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(locatio.x,locatio.y,48,48);
stroke(220);
  strokeWeight(3);
  fill(149);
  ellipse(loca.x,loca.y,55,55);
}