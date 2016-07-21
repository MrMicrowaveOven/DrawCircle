function draw_first_eighth(center, radius){
  var point_storage = []
  // diagonal_eighth is the x-coordinate of the point an eighth
  //  of the way around the circle.
  // We add 1 to the calculation because there tends to be a 'hole'
  //  near the point of reflection.
  var diagonal_eighth = radius/Math.sqrt(2) + 1;
  for (var y = 0; y < diagonal_eighth; y++) {
    var x = get_x_coordinate(y, radius)
    // Take off-center into account
    var shiftedx = x + center[0];
    var shiftedy = y + center[1];
    // This draws the first eighth (0 to 45)
    draw_point(shiftedx, shiftedy);
    point_storage.push([shiftedx, shiftedy]);
  }
  return point_storage;
}
