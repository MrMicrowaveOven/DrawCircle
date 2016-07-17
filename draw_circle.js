function draw_circle(center, radius) {
  var point_storage = []
  var first_quarter_points = draw_first_quarter();
  point_storage = point_storage.concat(first_quarter_points);
  var second_quarter_points = draw_second_quarter(point_storage);
  point_storage = point_storage.concat(second_quarter_points);
  var second_half_points = draw_second_half(point_storage)
  point_storage = point_storage.concat(second_half_points);
}
