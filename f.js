// This function returns the y coordinate for a given x coordinate on the circle.
// It is named "f" because of the adorable notation it displays
// when called with parameter "x".

function f(x){
  var radius_squared = this.radius * this.radius;
  var x_squared = x * x;
  return Math.sqrt(radius_squared - x_squared);
}
