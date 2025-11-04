// Inheritance and Code in Multiple Files
// Peyton Salzsauler
// October 30th 2025
//


let objects = []
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 40; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObject(random(width), random(height)))
    objects.push(new LineObject());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}



// parent class ('Super Class')
// --- if all in one file, should occur first---
class AnimatedObject{
  constructor(x,y){
    this.x = x, this.y = y;
    this.size = 6;

  }

  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }
  display(){
    strokeWeight(this.size);
    point(this.x, this.y);
  }
}

// Child Class #1 - Circle
class CircleObject extends AnimatedObject{
  constructor(x,y){
    super(x,y);
    // we can also add on to what is in the parent class
    this.size = random(20,40);
  }
  //no mention of move()..... it will be same as the parents move()
  display(){ // function overide; copies overtop of parent function
    if(dist(this.x, this.y, mouseX, mouseY) < this.size/2){
      fill(0,255,0);
    }
    else fill(255);


    circle(this.x, this.y, this.size);
  }
}
// Child Class #2 - Line
class LineObject extends AnimatedObject{
  constructor(){
    super(random(width), random(height));

  }

  move(){ // combo override, but built on parent version
    super.move();//runs the parent version move()
    this.x -= 5;
    if(this.x < 0) this.x = width;
  }
  display(){
    if(mouseIsPressed){
      strokeWeight(12);
    }
    else strokeWeight(2);

    line(this.x, this.y, this.x + 15, this.y)
  }
}