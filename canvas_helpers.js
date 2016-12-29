function clearCanvas() {
  this.ctx.beginPath();
  this.ctx.clearRect(0,0, 720, 480);
  this.ctx.fill();
  this.ctx.closePath();
  loadCanvas();
}
function loadCanvas() {
  // Add a white background
  this.ctx.beginPath();
  this.ctx.rect(  0,   0, 720,   480);
  this.ctx.fillStyle = "white";
  this.ctx.fill();
  this.ctx.closePath();

  // Axis parameters
  this.originX = 360;
  this.originY = 240;
  var originX = this.originX;
  var originY = this.originY;

  var ctx = this.ctx;

  draw_axis(this.originX, this.originY);
  ctx.font="12px Georgia";
  ctx.fillText("100",originX + 90,originY + 13);
  ctx.fillText("-100",originX - 114,originY + 13);
  ctx.fillText("100",originX + 5,originY - 96);
  ctx.fillText("-100",originX + 5, originY + 104);
  ctx.fillText("200", originX + 191,originY + 13);
  ctx.fillText("-200",originX - 216,originY + 13);
  ctx.fillText("200",originX + 5,originY - 196);
  ctx.fillText("-200",originX + 5, originY + 204);
  draw_border();
}

function draw_border() {
  this.ctx.beginPath();
  this.ctx.rect(  0,   0, 720,   1);
  this.ctx.rect(  0,   0,   1, 480);
  this.ctx.rect(719,   0,   1, 479);
  this.ctx.rect(  0, 479, 720,   1);
  this.ctx.fill();
  this.ctx.closePath();
}
