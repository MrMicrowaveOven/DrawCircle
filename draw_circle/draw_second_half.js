function draw_second_half(center, PointStorage) {
  var PointStorageOutput = [];
  PointStorage.reverse().forEach(function(point) {
    var vertDistanceFromCenter = point[1] - center[1];
    // Reflect the y-coordinate with respect to horizontal
    // line passing through the center.
    var x = point[0];
    var y = point[1] - 2 * vertDistanceFromCenter;
    draw_point(x,y);
    PointStorageOutput.push([x,y])
  });
  return PointStorageOutput;
}
