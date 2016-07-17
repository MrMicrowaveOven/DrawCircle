function draw_first_eighth(){
  for (var x = 0; x < this.radius/Math.sqrt(2); x++) {
    // figure out X for this Y
    draw_point(x, f(x));
    // Draw that x,y
  }
}
