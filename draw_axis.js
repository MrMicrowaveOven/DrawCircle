function draw_axis(originX, originY){
  var x_length = 200;
  var y_length = 200;
  this.ctx.beginPath();
  this.ctx.rect(originX - x_length, originY, x_length * 2, 1);
  this.ctx.rect(originX, originY - y_length, 1, y_length * 2);
  this.ctx.fillStyle = "black";
  this.ctx.fill();
  this.ctx.closePath();
  draw_grid_lines(originX, originY);
}
function draw_grid_lines(originX, originY){
  draw_x_axis_lines(originX, originY);
  draw_y_axis_lines(originX, originY);
}


function draw_x_axis_lines(originX, originY) {
  var line_length = 2;
  var scale = 10;
  var num_lines = 10;
  for (var i = -num_lines * 2; i <= num_lines * 2; i++) {
    this.ctx.beginPath();
    this.ctx.rect(originX - i * scale, originY - line_length, 1, line_length * 2 + 1)
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
function draw_y_axis_lines(originX, originY) {
  // repeating code because I might reuse this for other charts
  var line_length = 2;
  var scale = 10;
  var num_lines = 10;
  for (var i = -num_lines * 2; i <= num_lines * 2; i++) {
    this.ctx.beginPath();
    this.ctx.rect(originX - line_length, originY - i * scale, line_length * 2 + 1, 1)
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
