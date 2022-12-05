let cvs;
let wordstack = document.querySelector("#wordstack")

let wx, wy;

import { cp } from "../scripts/colorChange.js";

var colorPalette;

class Typography{
  constructor(xPos, yPos, width, height, content, index) {
    this.content = content;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.index = index;
  }

  //resized window => change its size
  update() {
    wx = width / 100;
    wy = height / 100;
    this.xPos = wx * 50;
    this.yPos = wy * 11 * (this.index + 1);
    this.width - textWidth(this.content);
    this.height = 9 * wy;
  }

  //it will look like it is falling, and it will stack on top of each other.
  stack(){
  
  }

  //show
  show() {
    text(this.content, this.xPos, this.yPos);
    fill(255);
  }

  //mouse Interaction
  mouseInteract() {
    // print(mouseX-this.xPos, mouseY-this.yPos);
    if (dist(mouseX+48, this.xPos, mouseY+240, this.yPos) < sqrt(pow(this.width / 2, 2) + pow(4.5*wx, 2))){
      // print("close! to", this.content);
      fill(255, 0, 0);
    }
  }
}

let texts = [];

var font;
function setup() {
  background(255);
  colorPalette = cp();
  stroke(color(colorPalette));
  textAlign(CENTER);
  cvs = createCanvas(window.innerWidth-60, window.innerHeight-240);
  wx = width / 100;
  wy = height / 100;
  cvs.parent("wordstack");
  font = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-buri-SemiBold.woff')

  //setting the texts
  texts[0] = new Typography(50 * wx, 11 * wy, 0, 0, "Computer Science", 0);
  texts[1] = new Typography(50 * wx, 22 * wy, 0, 0, "Art & Technology", 1);
  texts[2] = new Typography(50 * wx, 33 * wy, 0, 0, "Developer", 2);
  texts[3] = new Typography(50 * wx, 44 * wy, 0, 0, "Designer", 3);
  texts[4] = new Typography(50 * wx, 55 * wy, 0, 0, "Data", 4);
  texts[5] = new Typography(50 * wx, 66 * wy, 0, 0, "Me", 5);

}

function draw() {
  //initialization
  background(255);
  stroke(color(colorPalette));
  strokeWeight(6);
  fill(255);

  //responsive sizing
  wx = width / 100;
  wy = height / 100;
  textFont(font, 9 * wx);
  
  //some interaction according to time
  let timea = millis();
  //rotateX(timea / 1000);

  //now use the texts to play with
  for (let i = 0; i < texts.length; i++) {
    texts[i].update();
    texts[i].stack();
    texts[i].mouseInteract();
    texts[i].show();
  }
}

function changeMyColor(){
  fill(0);
}

//changing color
function mouseClicked() {
  colorPalette = cp();
  console.log("new colorPalette: ", color(colorPalette));
  stroke(color(colorPalette));
  redraw();
}

//responsive
function windowResized() {
  //responsive canvas / text size -> set at draw
  resizeCanvas(window.innerWidth-60, window.innerHeight-240);

  //get new color just in case
  colorPalette = cp();
  console.log("new colorPalette: ", color(colorPalette));
  stroke(color(colorPalette));
  redraw();
}

window.setup = setup; 
window.draw = draw;
window.mouseClicked = mouseClicked;
window.windowResized = windowResized;