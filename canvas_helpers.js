function clearCanvas() {
  this.ctx.beginPath();
  this.ctx.clearRect(0,0, 720, 480);
  this.ctx.fill();
  this.ctx.closePath();
  loadCanvas();
}
function loadCanvas() {
  // Axis parameters
  this.originX = 300;
  this.originY = 240;

  draw_axis(this.originX, this.originY);
  ctx.font="12px Georgia";
  ctx.fillText("100",390,255);
  ctx.fillText("-100",186,255);
  ctx.fillText("100",305,144);
  ctx.fillText("-100",305,344);
  draw_border()
}

function draw_border() {
  this.ctx.beginPath();
  this.ctx.rect(0,   0,   720, 1  );
  this.ctx.rect(0,   0,   1,   480);
  this.ctx.rect(719, 0,   1,   479);
  this.ctx.rect(0,   479, 720, 1  );
  this.ctx.fill();
  this.ctx.closePath();
}
