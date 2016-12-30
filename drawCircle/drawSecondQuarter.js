function drawSecondQuarter(center, PointStorage){
  var PointStorageOutput = [];
  PointStorage.reverse().forEach(function(point) {
    var horDistanceFromCenter = point[0] - center[0];
    // Reflect the x-coordinate with respect to vertical
    // line passing through the center.
    var x = point[0] - 2 * horDistanceFromCenter;
    var y = point[1];
    drawPoint(x,y);
    PointStorageOutput.push([x,y]);
  });
  return PointStorageOutput;
}
