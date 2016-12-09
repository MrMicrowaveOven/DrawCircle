function draw_second_quarter(center, PointStorage){
  var PointStorageOutput = [];
  PointStorage.reverse().forEach(function(point) {
    var hor_distance_from_center = point[0] - center[0];
    // Reflect the x-coordinate with respect to vertical
    // line passing through the center.
    var x = point[0] - 2 * hor_distance_from_center;
    var y = point[1];
    draw_point(x,y);
    PointStorageOutput.push([x,y])
  });
  return PointStorageOutput;
}
