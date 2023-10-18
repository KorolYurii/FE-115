"use strict";

var angle = document.querySelector('.angle');
var border = document.querySelector('.border');
var computedStyles = getComputedStyle(border);
var borderWidth = parseInt(computedStyles.width);
var borderHeight = parseInt(computedStyles.height);
var x0, y0, x1, y1, diffX, diffY;

function pointerMove(event) {
  x1 = event.x;
  y1 = event.y;
  diffX = x1 - x0;
  diffY = y1 - y0;

  if (diffX > 0) {
    border.style.width = borderWidth + diffX + 'px';
  }

  if (diffY > 0) {
    border.style.height = borderHeight + diffY + 'px';
  }

  document.addEventListener('pointerup', function () {
    document.removeEventListener('pointermove', pointerMove);
  });
}

function pointerDown(event) {
  x0 = event.x;
  y0 = event.y;
  document.addEventListener('pointermove', pointerMove);
}

angle.addEventListener('pointerdown', pointerDown);