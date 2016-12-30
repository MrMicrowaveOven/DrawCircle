function drawPoint(x, y) {
  var coordinates = carteToCanvas(x,y);

  this.ctx.beginPath();

  this.ctx.rect(coordinates[0], coordinates[1], 1, 1);
  this.ctx.fill();
  this.ctx.closePath();
}
