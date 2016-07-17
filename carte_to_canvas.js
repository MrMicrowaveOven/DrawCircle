function carte_to_canvas(x,y) {
  var originX = this.originX;
  var originY = this.originY;

  return [originX + x, originY - y];
}
