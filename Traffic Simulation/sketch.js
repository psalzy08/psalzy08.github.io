// Traffic Simulation
// Peyton Salzsauler
// October 20th, 2025
//

let myCar;
let direction;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Car(300, 1);
}

function draw() {
  background(220);
  drawRoad();
  myCar.display();
  myCar.move();
}
function drawRoad(){
  //creates the road
  fill(40);
  rectMode(CENTER);
  rect(width/2, height/2, width, height/2);

  // creates the yellow line on the road
  for(let i = 0; i < width; i+= 30){
    fill(255,255,0);
    rect(i, height/2, 20, 5);

  }
}
class Car{
  constructor(y,direction){
    this.x = random(width); this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.s = random(2,10);
    this.direction = random(2);
  }
  display(){
    rectMode(CORNER);
    fill(this.c);
    noStroke();
    rect(this.x, this.y, 50, 30);
    stroke(2);
    fill(255);
    rect(this.x + 5, this.y, 10, -5 )
    rect(this.x + 35, this.y, 10, -5 )
    rect(this.x + 35, this.y + 35, 10, -5 )
    rect(this.x + 5, this.y + 35, 10, -5 )
  }
  move(){
    if (this.direction = 1){
      this.x += this.s;
    }
    
    if(this.x > width){
      this.x = 0;
    }
  }
}
