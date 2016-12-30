function drawAxis(originX, originY){
  var xLength = 200;
  var yLength = 200;
  this.ctx.beginPath();
  this.ctx.rect(originX - xLength, originY, xLength * 2, 1);
  this.ctx.rect(originX, originY - yLength, 1, yLength * 2);
  this.ctx.fillStyle = "black";
  this.ctx.fill();
  this.ctx.closePath();
  drawGridLines(originX, originY);
}
function drawGridLines(originX, originY){
  drawXAxisLines(originX, originY);
  drawYAxisLines(originX, originY);
}


function drawXAxisLines(originX, originY) {
  var lineLength = 2;
  var scale = 10;
  var numLines = 10;
  for (var i = -numLines * 2; i <= numLines * 2; i++) {
    this.ctx.beginPath();
    this.ctx.rect(originX - i * scale, originY - lineLength, 1, lineLength * 2 + 1)
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
function drawYAxisLines(originX, originY) {
  // repeating code because I might reuse this for other charts
  var lineLength = 2;
  var scale = 10;
  var numLines = 10;
  for (var i = -numLines * 2; i <= numLines * 2; i++) {
    this.ctx.beginPath();
    this.ctx.rect(originX - lineLength, originY - i * scale, lineLength * 2 + 1, 1)
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
