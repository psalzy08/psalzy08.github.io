// Working With Images
// and random() and noise()
// Peyton Salzsauler
// September 24, 2025

// let x1, y1,x2, y2;
// let d1, d2;
// let noiseTime = 5, noiseSpeed = 0.01;
// //   noise speed controls how connected 
// // our random noise() values are.
// let minSize = 5; let maxSize = 200;

// let mX, mY;   //move x and y
// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   x1 = width*0.3; y1 = height*0.5;
//   x2 = width*0.7; y2 = height*0.5;
//   mY = height*0.3
//   //frameRate(10);

// }

// function noiseMove(){
//   // use random noise to set the xposistion of a third circle
//   circle(mX, mY, 50);
//   d2 = noise(noiseTime);
//   noiseTime += noise(noiseTime);
//   mx = map = map(mY, 0, 1, 0, width );
// }

// function draw() {
//   background(220);
//   randomCircle();
//   noiseCircle();
//   noiseMove();
// }

// function noiseCircle(){
//   //draws a fixed circle woth randomly 
//   //changing (but smooth, hopefully!) diameters
//   d2 = noise(noiseTime); // yields a value between 0-1 
//   d2 = map(d2, 0, 1, minSize, maxSize);
//   fill(255,50,150);
//   circle(x2, y2, d2);
//   noiseTime += noiseSpeed;
// }
// function randomCircle(){
//   //draw a fixed circle with randomly changing diameter
//   fill(50,150,250);
//   d1 = random(minSize, maxSize);
//   circle(x1, y1,d1);
// }





// Working With Images
// Peyton Salzsauler
// September 25th, 2025

let lionL, lionR;
let facingRight = false;


function setup(){
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  imageMode(CENTER);
  noCursor();
}

async function loadAssets(){
  // handle loading all the images
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");
}

function draw() {
  background(220);
  // update our direction
  if(pmouseX < mouseX){
    facingRight = true;
  }
  else if(pmouseX > mouseX){
    facingRight= false;
  }

  if(facingRight){
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2); 
  }
  else{
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  
  
}