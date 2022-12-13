let cvs;
let wordstack = document.querySelector("#wordstack")

let wx, wy;

import { cp } from "../scripts/colorChange.js";

var colorPalette, colorTransparent;

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
    this.yPos = wy * 16 * (this.index + 1)-10;
    this.width = textWidth(this.content);
    this.height = max(36, 9 * wy);
  }

  //it will look like it is falling, and it will stack on top of each other.
  stack(){
    
  }

  //show
  show() {
    if(mouseX >this.xPos-this.width/2 && mouseX < this.xPos+this.width/2 && mouseY >this.yPos-this.height && mouseY < this.yPos) {
    // alert("close! to", this.content);
      // fill(colorPalette);
      strokeWeight(2);
      fill(255);
      for (let i = 0; i < 80; i++) {
        if (i % 2 == 0) {
          stroke(255);
        } else {
          stroke(red(colorPalette), green(colorPalette), blue(colorPalette), 255/79*(i+1));
        }
        strokeWeight(6 + 6 *(79-i));
        textFont(font);
        text(this.content, this.xPos, this.yPos);
      }
      strokeWeight(6);
    } 
  }  
  
  rawShow() {
    stroke(colorPalette);
      fill(255);
      text(this.content, this.xPos, this.yPos);
    }
  }

let texts = [];

var font;
function setup() {
  background(255);
  colorPalette = cp();
  colorTransparent = color(red(colorPalette), blue(colorPalette), green(colorPalette), 32);
  stroke(color(colorPalette));
  strokeCap(ROUND);
  strokeJoin(ROUND);
  textAlign(CENTER);
  cvs = createCanvas(window.innerWidth-60, window.innerHeight-240);
  wx = width / 100;
  wy = height / 100;
  cvs.parent("wordstack");
  font = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-buri-SemiBold.woff')

  //setting the texts
  texts[0] = new Typography(50 * wx+random(-10, 10), 11 * wy+random(-10, 10), 0, 0, "Computer Science", 0);
  texts[1] = new Typography(50 * wx+random(-10, 10), 22 * wy+random(-10, 10), 0, 0, "Art & Technology", 1);
  texts[2] = new Typography(50 * wx+random(-10, 10), 33 * wy+random(-10, 10), 0, 0, "Developer", 2);
  texts[3] = new Typography(50 * wx+random(-10, 10), 44 * wy+random(-10, 10), 0, 0, "Designer", 3);
  texts[4] = new Typography(50 * wx+random(-10, 10), 55 * wy+random(-10, 10), 0, 0, "Data", 4);
  texts[5] = new Typography(50 * wx+random(-10, 10), 66 * wy+random(-10, 10), 0, 0, "Me", 5);

  background(255);
}

function draw() {
  //initialization
  // background(255);
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
  for (let i = 0; i <6; i++) {
    texts[i].update();
    texts[i].stack();
    texts[i].show();
    texts[i].rawShow();
  }

  for (let i = 0; i <6; i++) {
    // texts[i].rawShow();
  }

  fill(0);
  // rect(mouseX, mouseY, 20, 20);
}

function changeMyColor(){
  fill(0);
}

//changing color
function mouseClicked() {
  colorPalette = cp();
  // console.log("new colorPalette: ", color(colorPalette));
  // stroke(color(colorPalette));
  // background(255);
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