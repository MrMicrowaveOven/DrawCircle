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
  ctx.font="16px Georgia";
  ctx.fillText("100",490,260);
  ctx.fillText("-100",80,260);
  ctx.fillText("100",307,45);
  ctx.fillText("-100",307,445);

}
