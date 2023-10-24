    const angle = document.querySelector('.angle');
    const border = document.querySelector('.border');

    let computedStyles = getComputedStyle(border);
    let borderWidth = parseInt(computedStyles.width);
    let borderHeight = parseInt(computedStyles.height);

    let x0,
        y0,
        x1,
        y1,
        diffX,
        diffY

 function pointerMove(event) {
    x1 = event.x;
    y1 = event.y;

    diffX = x1 - x0;
    diffY = y1 - y0;

    if (diffX > 0) {
        border.style.width = borderWidth + diffX  + 'px'
    }
    if (diffY > 0) {
        border.style.height = borderHeight + diffY + 'px'
    }
    
    document.addEventListener('pointerup', function () {
        document.removeEventListener('pointermove', pointerMove)
    })
 }
 function pointerDown(event) {
    x0 = event.x;
    y0 = event.y;

    document.addEventListener('pointermove', pointerMove)
 }

 angle.addEventListener('pointerdown', pointerDown)

// table
 function sort(columnIndex) {
    const table = document.getElementById("table");
    const rows = Array.from(table.rows).slice(1);
    const number = columnIndex === 0 || columnIndex === 2;

    rows.sort((a, b) => {
        const aValue = number ? parseFloat(a.cells[columnIndex].textContent) : a.cells[columnIndex].textContent;
        const bValue = number ? parseFloat(b.cells[columnIndex].textContent) : b.cells[columnIndex].textContent;

        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    });

    rows.forEach((row) => table.tBodies[0].appendChild(row));
}