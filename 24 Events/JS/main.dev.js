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

angle.addEventListener('pointerdown', pointerDown); // table

function sort(columnIndex) {
  var table = document.getElementById("table");
  var rows = Array.from(table.rows).slice(1);
  var number = columnIndex === 0 || columnIndex === 2;
  rows.sort(function (a, b) {
    var aValue = number ? parseFloat(a.cells[columnIndex].textContent) : a.cells[columnIndex].textContent;
    var bValue = number ? parseFloat(b.cells[columnIndex].textContent) : b.cells[columnIndex].textContent;
    return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
  });
  rows.forEach(function (row) {
    return table.tBodies[0].appendChild(row);
  });
}