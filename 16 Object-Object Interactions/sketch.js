// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let nodes = [];
let reach = 70;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function mousePressed(){
  nodes.push(new csNode(mouseX, mouseY));
}

function draw() {
  background(0);
  
  for(let n of nodes){
    n.move();
    n.display();
    n.connect(nodes);
  }
}
class csNode{
  //1. Constructor
  constructor(x,y){
    this.x = x; this.y = y; this.size = 20;
    this.c = color(255, 0, random(225));

    //properties related to movement
    this.xTime = random(10); this.yTime = random(10);
    this.timeShift = 0.01; this.maxSpeed = 50;
    
  }
  // class methods
  display(){ // draw our csNode as a circle on a canvas
    fill(this.c);
    noStroke();
    point(this.x, this.y, this.size);
  }
  move(){
    //use perlin noise for x/y movement
    let xSpeed = noise(this.xTime); // 0 - 1
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x < 0) this.x = width;
    else if (this.x > width) this.x = 0;

    // ----- now the same for Y ---------
    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if(this.y < 0) this.y = width;
    else if(this.x > height) this.x = 0;
  }

  connect(nodeArray){
    //check if the current point is close to any other 
    //points. if so, join with a line
    stroke(this.c);
    for(let n of nodeArray){
      //this.x this.y n.x n.y
      if(n !== this){// make sure not to compare to self
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){ // if the points are close
          line(this.x, this.y, n.x, n.y);

        }
      }
    }

  }
}