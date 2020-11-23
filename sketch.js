const METER = {
  LOCATION: 250,
  HEIGHT: 60
};

let spectrum;
let needle;

function setup() {
  createCanvas(400, 400);

  (new Words()).getPair()
    .then(opposites => {
      spectrum = new Spectrum(opposites);
      needle = new Needle();
    });

  noLoop();
}

function draw() {
  background(220);
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