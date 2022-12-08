function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        container.appendChild(createRow(gridSize));
    }
}

function createRow(gridSize) {
    const row = document.createElement('div')
    for (let i = 0; i < gridSize; i++) {
        row.appendChild(createCell(gridSize));
        console.log(row)
    }
    return row
}

function createCell(gridSize) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell')
    cell.setAttribute('style', 
    `width: ${800 / gridSize}px; 
    height: ${800 / gridSize}px; 
    background: white;`);
    return cell
}

const container = document.querySelector('.container')
container.appendChild((createGrid(16)))