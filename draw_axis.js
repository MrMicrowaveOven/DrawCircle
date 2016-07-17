function draw_axis(){
  this.ctx.beginPath();
  this.ctx.rect(this.originX - 200, this.originY, 400, 1);
  this.ctx.rect(this.originX, this.originY - 200, 1, 400);
  this.ctx.fillStyle = "black";
  this.ctx.fill();
  this.ctx.closePath();
}
