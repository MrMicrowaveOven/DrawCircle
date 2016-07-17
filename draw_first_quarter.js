function draw_first_quarter(){
  var point_storage = []
  // diagonal_eighth is the x-coordinate of the point an eighth
  // of the way around the circle.
  var diagonal_eighth = this.radius/Math.sqrt(2) + .5;
  for (var x = 0; x < diagonal_eighth; x++) {
    var y = f(x)
    // This draws the first eighth (45 to 90)
    draw_point(x, y);
    point_storage.push([x,y]);
    // This draws the reflection over the diagonal (0 to 45)
    draw_point(y, x);
    point_storage.push([y,x]);
  }
  return point_storage;
}
