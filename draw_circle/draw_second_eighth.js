function draw_second_eighth(center, point_storage){
  point_storage.reverse().forEach(function(point) {
    // This draws the reflection over the diagonal (45 to 90)
    var unshiftedx = point[0] - center[0];
    var unshiftedy = point[1] - center[1];

    var reflectedx = unshiftedy;
    var reflectedy = unshiftedx;

    var reshiftedx = reflectedx + center[0];
    var reshiftedy = reflectedy + center[1];
    draw_point(reshiftedx, reshiftedy);
    point_storage.push([reshiftedx,reshiftedy]);
  })
  return point_storage;
}
