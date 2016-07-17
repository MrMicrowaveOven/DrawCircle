function draw_first_quarter(){
  for (var x = 0; x < this.radius; x++) {
    // figure out X for this Y
    draw_point(x, f(x));
    // Draw that x,y
  }
}
