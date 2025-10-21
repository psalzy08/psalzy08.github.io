// Objects Mini Demo
// Peyton Salzsauler
// October 10th, 2025

// globals ----- "simple data only"
let myBall;
let ballCollection = []
function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(100,100);
}

function draw() {
  background(220);
  // process the single ball object
  myBall.move();
  myBall.display();
  
  //add new objects 
  if(mouseIsPressed){
    ballCollection.push(new Ball(mouseX, mouseY));
  }
  for(let b of ballCollection){
    b.move();
    b.display();
  }
}
class Ball{
  // 1. Constructorr
  constructor(x,y){
    this.x = x; this.y = y;
    this.c = (random(225), random(225), random(255));
    this.size = 15;
    this.speed = random(2,10);

  }


  //2 Class methods/functions
  display(){
    fill(this.c);
    circle(this.x, this.y, this.size);
  }
  move(){
    //horizontal movement only
    this.x += this.speed;
    if(this.x > width) this.x = 0;
  }
}