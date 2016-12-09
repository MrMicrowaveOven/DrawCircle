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

}
