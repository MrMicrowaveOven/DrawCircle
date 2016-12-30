function off_canvas_warning(center, radius) {
  var xLimit = 360;
  var yLimit = 240;

  var xOffBounds = xLimit - Math.abs(center[0]);
  var yOffBounds = yLimit - Math.abs(center[1]);

  if (xOffBounds < 0 || yOffBounds < 0) {
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
