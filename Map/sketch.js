// Map Data Structure and Reading Files
// Peyton Salzsauler
// October 31st, 2025
//

let textFile;
let imgText, rows, cols, colorMap;
function preload() {
  // use this function to load the text from our files
  textFile = loadStrings("assets/info.txt")
  imgText = loadStrings("assets/colorImage.txt")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //processText();

  //determine number of rows/collumns
  rows = imgText.length;
  cols = imgText[0].length;

  // construct the map of colours
  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)],
    ["r", "red"],
    ["l", "brown"],
    ["p", "purple"]

  ]);

  drawImage();
}

function drawImage(){
  // read through our text info
  // and construct an image
  let pixelSize = 50;
  for(let y = 0; y<rows; y++){
    for(let x = 0; x < cols; x++){
      let currentRow = imgText[y];
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey))
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
    }
  }
}

function processText(){
  //look at 3 different ways to split up a larger 
  //string into words or individual characters
  // split() and 
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARACTERS"); 
  let splitChars = textFile[1].split(" ");
  print(splitChars);

  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}

function draw() {
  //background(220);

}
