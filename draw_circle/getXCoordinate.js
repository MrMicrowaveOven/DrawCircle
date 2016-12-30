// This function returns the y coordinate for a given
// x coordinate on the circle.

function getXCoordinate(y, radius){
  var radiusSquared = radius * radius;
  var ySquared = y * y;
  return Math.sqrt(radiusSquared - ySquared);
}
