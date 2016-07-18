// This function returns the y coordinate for a given x coordinate on the circle.

function get_y_coordinate(x, radius){
  var radius_squared = radius * radius;
  var x_squared = x * x;
  return Math.sqrt(radius_squared - x_squared);
}
