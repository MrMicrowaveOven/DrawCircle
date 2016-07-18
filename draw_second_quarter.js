function draw_second_quarter(center){
  var point_storage_output = [];
  point_storage = this.point_storage;
  point_storage.forEach(function(point) {
    var hor_distance_from_center = point[0] - center[0];
    // Reflect the x-coordinate with respect to vertical
    // line passing through the center.
    var x = point[0] - 2 *(hor_distance_from_center);
    var y = point[1];
    draw_point(x,y);
    point_storage_output.push([x,y])
  });
  return point_storage_output;
}
