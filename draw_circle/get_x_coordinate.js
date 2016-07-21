// This function returns the y coordinate for a given x coordinate on the circle.

function get_x_coordinate(y, radius){
  var radius_squared = radius * radius;
  var y_squared = y * y;
  return Math.sqrt(radius_squared - y_squared);
}
