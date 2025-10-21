// Classes and Objects (Books)
// Peyton Salzsauler
// October 15th 2025
//

//global variables
let myBook;
let bookshelf = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create my single book
  myBook = new Book("CS30 Text", "Mr Scott", 
    1234567891011, "leatherbound", 515, width * 0.3);
  

    // use loop here to fill the array
    for(let i = 0, i < 20, i++){
      bookshelf.push(new Book ("Book Title", "Mr. Chan", "1234567891011", "leatherbound", random(400), width * 0.3)
    }
}

function draw() {
  background(220);
  myBook.display();
}
// typically organize class to bottom
class Book{
  //1. constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    //"softcover", "hardcover", "leatherbound"
    this.pages = pages;
    this.x = x;
    this.pickedUp = false;
    this.left; this.right; this.top; this.bottom;
    this.updateSides();
  }
  //2. class methods
  updateSides(){
    this.top = height/2 - 75;
    this.bottom = height/2 -+ 75;
    this.left = this.x - this.pages/20;
    this.right = this.x + this.pages/20;
  }

  mouseIsOver(){
    //return whether the mouse is hovering over or not
    if(mouseX > this.left && mouseX < this.right){
      if (mouseY < this.bottom && mouseY > this.top){
        return true;
      }
    }
    return false;
  }

  display(){
    //render our book object on the canvas
    rectMode(CENTER); textAlign(CENTER,CENTER); 
    textSize(20);

    switch(this.cover){
      case "softcover":
        fill(250, 200, 150); break;
      case "hardcover":
        fill(120, 255, 255); break;
      case "leatherbound":
        fill(150,100,15); break;

    }

    //now, draw the book elements
    push();
    translate(this.x, height/2);
    if(this.mouseIsOver()){
      scale(1.1);
    }
    rect(0,0,this.pages / 10, 150);
    fill(255);
    text(this.title[0], 0, -50);
    pop();
  }

}