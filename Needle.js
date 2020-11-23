class Needle {
  
  constructor() {
    this.location = width / 2;
  }
  
  show() {
    stroke(color("white"));
    line(this.location, METER.LOCATION, this.location, METER.LOCATION+METER.HEIGHT);
    
    this.show();
  }
  
  setLocation(x) {
    this.location = x;
  }
  
  getLocation() {
    return this.location;
  }
  
}