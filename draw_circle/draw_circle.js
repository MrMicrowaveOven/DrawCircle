function draw_circle(center, radius) {
  var PointStorage = []
  var first_eighth_points = draw_first_eighth(center, radius);
  PointStorage = PointStorage.concat(first_eighth_points);
  // Since the rest of the work is reflection, we need a good way to pass
  //  previous points to the later functions.  Passed as a parameter for now.
  var second_eighth_points = draw_second_eighth(center, PointStorage);
  PointStorage = PointStorage.concat(second_eighth_points);
  var second_quarter_points = draw_second_quarter(center, PointStorage);
  PointStorage = PointStorage.concat(second_quarter_points);
  var second_half_points = draw_second_half(center, PointStorage)
  PointStorage = PointStorage.concat(second_half_points);
}
