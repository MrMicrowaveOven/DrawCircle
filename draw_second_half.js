function draw_second_half(point_storage) {
  var point_storage_output = []
  point_storage.forEach(function(point) {
    var x = point[0];
    var y = -point[1];
    draw_point(x,y);
    point_storage_output.push([x,y])
  });
  return point_storage_output;
}
