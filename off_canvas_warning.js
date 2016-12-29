function off_canvas_warning(center, radius) {
  var xLimit = 360;
  var yLimit = 240;
  if (center[0] > xLimit || center[0] < -xLimit
    || center[1] > yLimit || center[1] < -yLimit) {
    raiseWarning();
  } else {
    clearWarning();
  }
}

function raiseWarning() {
  document.getElementById("off_canvas_warning").style.color = "red";
}
function clearWarning() {
  document.getElementById("off_canvas_warning").style.color = "rgba(255, 255, 255, 0)";
}
