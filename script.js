function createGrid(gridSize) {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    for (let i = 0; i < gridSize; i++) {
        container.appendChild(createRow(gridSize));
    }
}

function createRow(gridSize) {
    const row = document.createElement('div')
    for (let i = 0; i < gridSize; i++) {
        row.appendChild(createCell(gridSize));
    }
    return row
}

function createCell(gridSize) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell')
    cell.setAttribute('style', 
    `width: ${800 / gridSize}px; 
    height: ${800 / gridSize}px;
    background-color: white;`);
    cell.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = "black"
    })
    return cell
}

let currentSize = 16;
const container = document.querySelector('.container');
createGrid(currentSize);

const changeSize = document.querySelector('#change')
changeSize.addEventListener('click', function(e){
    currentSize = prompt("How big do you want your drawing area?(Max 100)")
    if (currentSize > 100) {
        currentSize = 100
    }
    createGrid(currentSize);
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', function(e){
    createGrid(currentSize);
})