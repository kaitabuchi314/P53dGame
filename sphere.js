class Sphere extends Shape {
  constructor(x, y, z, d) {
    super(x, y, z);
    this.d = d;
  }
  
  show() {
    translate(this.x, this.y, this.z);
    sphere(this.d);
  }
}
