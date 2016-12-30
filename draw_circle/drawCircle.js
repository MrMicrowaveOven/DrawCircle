function drawCircle(center, radius) {
  var PointStorage = [];
  var firstEighthpoints = drawFirstEighth(center, radius);
  PointStorage = PointStorage.concat(firstEighthpoints);
  // Since the rest of the work is reflection, we need a good way to pass
  //  previous points to the later functions.  Passed as a parameter for now.
  var secondEighthPoints = drawSecondEighth(center, PointStorage);
  PointStorage = PointStorage.concat(secondEighthPoints);
  var secondQuarterPoints = drawSecondQuarter(center, PointStorage);
  PointStorage = PointStorage.concat(secondQuarterPoints);
  var secondHalfPoints = drawSecondHalf(center, PointStorage)
  PointStorage = PointStorage.concat(secondHalfPoints);
}
