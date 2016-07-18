function draw_first_quarter(center, radius){
  var point_storage = []
  // diagonal_eighth is the x-coordinate of the point an eighth
  //  of the way around the circle.
  // We add 1 to the calculation because there tends to be a 'hole'
  //  near the point of reflection.
  var diagonal_eighth = radius/Math.sqrt(2) + 1;
  for (var x = 0; x < diagonal_eighth; x++) {
    var y = get_y_coordinate(x, radius)
    // Take off-center into account
    var shiftedx = x + center[0];
    var shiftedy = y + center[1];
    // This draws the first eighth (45 to 90)
    draw_point(shiftedx, shiftedy);
    point_storage.push([shiftedx, shiftedy]);

    shiftedx = x + center[1];
    shiftedy = y + center[0]
    // This draws the reflection over the diagonal (0 to 45)
    draw_point(shiftedy, shiftedx);
    point_storage.push([shiftedy,shiftedx]);
  }
  return point_storage;
}
