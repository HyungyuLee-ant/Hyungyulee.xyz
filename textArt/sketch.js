let cvs;
let wordstack = document.querySelector("#wordstack")

let wx, wy;

import { cp } from "../scripts/colorChange.js";

var colorPalette = cp();

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgb("+ +r + "," + +g + "," + +b + ")";
}

var font;
function setup() {
  colorPalette = cp();
  background(colorPalette);
  cvs = createCanvas(window.innerWidth, window.innerHeight);
  cvs.parent("wordstack");
 font = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-buri-SemiBold.woff')
  background(0);

}

// console.log(colorPalette.toString(16));
//console.log(hex(colorPalette))
function draw() {
    wx = width / 100;
  wy = height / 100;
  textFont(font, 10*wx);
  let timea = millis();
  //rotateX(timea / 1000);
  stroke(hexToRGB(colorPalette));
  strokeWeight(6);
  fill(255);
  //fill(hexToRGB(colorPalette));
  // circle(width / 2, height / 2, 120);
  text("Art & Technology", 5 * wx, 60 * wy);
}

function mouseClicked() {
  colorPalette = cp();
  // console.log(hexToRGB(colorPalette))
  redraw();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  textFont(font, 10 * wx);
  redraw();
  colorPalette = cp();
  redraw();
}

window.setup = setup; 
window.draw = draw;
window.mouseClicked = mouseClicked;
window.windowResized = windowResized;