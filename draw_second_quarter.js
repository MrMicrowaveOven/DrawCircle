function draw_second_quarter(point_storage){
  // var point_storage = this.point_storage;
  var point_storage_output = []
  console.log(point_storage);
  point_storage.forEach(function(point) {
    console.log(point);
    var x = -point[0];
    var y = point[1];
    draw_point(x,y);
    point_storage_output.push([x,y])
  });
  return point_storage_output;
}
