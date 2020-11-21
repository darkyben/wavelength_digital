class Spectrum {

  constructor() {
    this.CLOSE = 10;
    this.MEDIUM = 40;
    this.FAR = 80;

    // this.terms = opposites[floor(random(opposites.length))];
    this.point = floor(random(width));
    this.revealed = true;
  }

  show() {
    text(this.terms.negative, 10, METER.LOCATION-20);
    text(this.terms.positive, width-30, METER.LOCATION-20);
    
    stroke(color("grey"));
    fill(color("grey"));
    rect(0, METER.LOCATION, width, METER.HEIGHT);

    if (this.revealed) {
      stroke(color("yellow"));
      fill(color("yellow"));
      rect(this.point - this.FAR, METER.LOCATION, this.FAR * 2, METER.HEIGHT);

      stroke(color("orange"));
      fill(color("orange"));
      rect(this.point - this.MEDIUM, METER.LOCATION, this.MEDIUM * 2, METER.HEIGHT);

      stroke(color("red"));
      fill(color("red"));
      rect(this.point - this.CLOSE, METER.LOCATION, this.CLOSE * 2, METER.HEIGHT);
    }
  }
  
  hide() {
    this.revealed = false;
  }

  reveal(x) {
    this.revealed = true;

    this.checkLocation(x);
  }

  checkLocation(x) {
    if (this.isClose(x)) {
      alert("close");
    } else if (this.isMedium(x)) {
      alert("medium");
    } else if (this.isFar(x)) {
      alert("far");
    } else {
      alert("bummer");
    }
  }

  isClose(x) {
    if (this.point - this.CLOSE <= x &&
      x <= this.point + this.CLOSE) {
      return true;
    }

    return false;
  }

  isMedium(x) {
    if (this.point - this.MEDIUM <= x &&
      x <= this.point + this.MEDIUM) {
      return true;
    }

    return false;
  }

  isFar(x) {
    if (this.point - this.FAR <= x &&
      x <= this.point + this.FAR) {
      return true;
    }

    return false;
  }

}