function carteToCanvas(x,y) {
  var originX = this.originX;
  var originY = this.originY;

  return [originX + x, originY - y];
}
