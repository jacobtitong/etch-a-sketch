let gridSize = 2;

const container = document.querySelector('#container');

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
}