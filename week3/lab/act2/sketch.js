let slider1;
let slider2;
let slider3;

function setup(){
  createCanvas(windowWidth,windowHeight);
  slider1 = createSlider(0,255);
  slider2 = createSlider(0,255);
  slider3 = createSlider(0,255);
}

function draw(){
  background(slider1.value(),slider2.value(),slider3.value());
}