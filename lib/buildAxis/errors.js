function checkCircleParameters(center, radius) {
  offCanvasWarning(center, radius);
  negativeRadiusWarning(center, radius);
  largeRadiusWarning(center, radius);
}

function offCanvasWarning(center, radius) {
  var xLimit = 360;
  var yLimit = 240;

  var xOffBounds = xLimit - Math.abs(center[0]);
  var yOffBounds = yLimit - Math.abs(center[1]);

  if (xOffBounds < 0 || yOffBounds < 0) {
    raiseOffCanvasWarning();
  } else {
    clearOffCanvasWarning();
  }
}

function raiseOffCanvasWarning() {
  document.getElementById("offCanvasWarning").style.color =
    "red";
}
function clearOffCanvasWarning() {
  document.getElementById("offCanvasWarning").style.color =
    "rgba(255, 255, 255, 0)";
}

function negativeRadiusWarning(center, radius) {
  if (radius < 0) {
    raiseNegativeRadiusWarning();
  } else {
    clearNegativeRadiusWarning();
  }
}

function raiseNegativeRadiusWarning() {
  document.getElementById("negativeRadiusWarning").style.color =
    "red";
}
function clearNegativeRadiusWarning() {
  document.getElementById("negativeRadiusWarning").style.color =
    "rgba(255, 255, 255, 0)";
}

function largeRadiusWarning(center, radius) {
  if (radius > 400) {
    raiseLargeRadiusWarning();
  } else {
    clearLargeRadiusWarning();
  }
}

function raiseLargeRadiusWarning() {
  document.getElementById("largeRadiusWarning").style.color =
    "red";
}
function clearLargeRadiusWarning() {
  document.getElementById("largeRadiusWarning").style.color =
    "rgba(255, 255, 255, 0)";
}
