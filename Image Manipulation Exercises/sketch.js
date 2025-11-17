// Image Manipulation Exercises
// Peyton Salzsauler
// November 17th 2025
//

let chip;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
}

function draw() {
  background(220);
  image(chip, 0, 0)
}

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
}
function setPixelOneD(pos, r, g, b){
  
}