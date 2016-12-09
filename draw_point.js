function draw_point(x, y) {
  var coordinates = carte_to_canvas(x,y);

  this.ctx.beginPath();

  this.ctx.rect(coordinates[0], coordinates[1], 1, 1);
  this.ctx.fill();
  this.ctx.closePath();
}
