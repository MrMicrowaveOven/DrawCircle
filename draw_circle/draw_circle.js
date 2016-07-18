function draw_circle(center, radius) {
  var point_storage = []
  var first_quarter_points = draw_first_quarter(center, radius);
  point_storage = point_storage.concat(first_quarter_points);
  // Since the rest of the work is reflection, we need a good way to pass
  //  previous points to the later functions.  Passed as a parameter for now.
  var second_quarter_points = draw_second_quarter(center, point_storage);
  point_storage = point_storage.concat(second_quarter_points);
  var second_half_points = draw_second_half(center, point_storage)
  point_storage = point_storage.concat(second_half_points);
}