function draw_second_half(center, point_storage) {
  var point_storage_output = [];
  point_storage.reverse().forEach(function(point) {
    var vert_distance_from_center = point[1] - center[1];
    // Reflect the y-coordinate with respect to horizontal
    // line passing through the center.
    var x = point[0];
    var y = point[1] - 2 * vert_distance_from_center;
    draw_point(x,y);
    point_storage_output.push([x,y])
  });
  return point_storage_output;
}
