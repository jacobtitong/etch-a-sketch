let gridSize = 4;
let containerSize = gridSize * 960;

const container = document.querySelector('#container');

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
}