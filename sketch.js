let METER = {
  LOCATION: 250,
  HEIGHT  : 60
};

let opposites;

let spectrum;
let needle;

function preload() {
  let opposites = loadJSON("opposites.json");
}

function setup() {
  createCanvas(400, 400);
  spectrum = new Spectrum();
  needle = new Needle();
}

function draw() {
  alert(opposites);
  background(220);
  
  spectrum.show();
  needle.show();
}

function mouseClicked() {
  needle.setLocation(mouseX);
}

function keyPressed() {
  if (keyCode === ENTER) {
    spectrum.reveal(needle.getLocation());
  } else if (keyCode === UP_ARROW) {
    spectrum.hide();
  }
}