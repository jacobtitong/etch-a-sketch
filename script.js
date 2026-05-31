let gridSize = 10;
let containerSize = 750;
let boxSize = containerSize / gridSize;

const container = document.querySelector('#container');

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        container.appendChild(box);
    }
}

const allBoxes = document.querySelectorAll('.box');

allBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('hoveredBox');
    })
})