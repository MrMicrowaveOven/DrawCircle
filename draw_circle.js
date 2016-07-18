function draw_circle(center, radius) {
  this.point_storage = []
  var first_quarter_points = draw_first_quarter(center, radius);
  this.point_storage = this.point_storage.concat(first_quarter_points);
  var second_quarter_points = draw_second_quarter(center);
  this.point_storage = this.point_storage.concat(second_quarter_points);
  var second_half_points = draw_second_half(center)
  this.point_storage = this.point_storage.concat(second_half_points);
}
