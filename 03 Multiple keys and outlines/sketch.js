// Multiple Keys and Outlines
// Peyton Salzsauler
// September 15, 2025
//
//key is down 
// function setup(){
//   createCanvas(windowWidth, windowHeight);
// }
// function draw(){
//   background(220);
//   checkMulti();
  
// }
// function checkMulti(){
//   strokeWeight(mouseX / 10);
//   stroke(255,0,0);
//   //check for multiple keypresses (3 simulatenous)
//   let a = keyIsDown(65);
//   let b = keyIsDown(66);
//   let c = keyIsDown(67);
//   textSize(40);
//   text("a:" + a + "\tb:" + b + "\tc:" + c, 100, 300);

// }
let HeadSize = 70
function setup(){
  createCanvas(windowWidth, windowHeight);
}
function draw(){
  background(220);
  shape();
}
function shape(){
  noStroke();
  fill(150,225,150);
  circle(width/2, height/2, HeadSize);
  rect((width-70)/2, (height)/2, HeadSize, 45);
  rect(width/2-(HeadSize/2), (height/2)-(HeadSize/10), HeadSize/10, 70)
  rect(width/2+(HeadSize/2)-7.8, (height/2)-(HeadSize/10), HeadSize/10, 70)
}