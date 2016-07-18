function draw_second_half(center) {
  var point_storage_output = [];
  var point_storage = this.point_storage;
  point_storage.forEach(function(point) {
    var vert_distance_from_center = point[1] - center[1];
    var x = point[0];
    var y = point[1] - 2 * vert_distance_from_center;
    draw_point(x,y);
    point_storage_output.push([x,y])
  });
  return point_storage_output;
}
