let grid = document.querySelector('.squares-container');

let squares = 16;

grid.innerHTML = '';

const containerWidth = grid.clientWidth;
const containerHeight = grid.clientHeight;

const boxSize = Math.floor(containerWidth / squares);

for (let i = 0; i < squares * squares; i++) {
    box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.border = '1px solid black';
    box.style.boxSizing = 'border-box';
    grid.appendChild(box);
}