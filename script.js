const newGridButton = document.querySelector('#newGridButton');
newGridButton.addEventListener('click', () => {
    createGrid();
})

function createGrid() {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    let gridSize = prompt("Enter Grid Size", 10);

    let containerSize = createContainer(gridSize, container);

    createBoxes(gridSize, containerSize, container);

    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.classList.add('hoveredBox');
        })
    })
}

function createBoxes(gridSize, containerSize, container) {
    let boxSize = containerSize / gridSize;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;
            container.appendChild(box);
        }
    }
}

function createContainer(gridSize, container) {
    let containerSize = 750;

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    return containerSize;
}