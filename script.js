let grid = document.querySelector('.squares-container');

let squares = 50;

grid.innerHTML = '';

const containerWidth = grid.clientWidth;
const containerHeight = grid.clientHeight;

const boxSize = Math.floor(containerWidth / squares);

const button1 = document.createElement('button');
const button2 = document.createElement('button');
button1.textContent = 'SQUARES';
button1.style.width = '100px';
button1.style.height = '50px';
button2.textContent = 'RESET';
button2.style.width = '100px';
button2.style.height = '50px';

let buttonsContainer = document.createElement('button-container');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.gap = '10px';
buttonsContainer.appendChild(button1);
buttonsContainer.appendChild(button2);
buttonsContainer.style.marginBottom = '10px';
grid.before(buttonsContainer);

for (let i = 0; i < squares * squares; i++) {
    let box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.border = '1px solid black';
    box.style.boxSizing = 'border-box';

    box.addEventListener('mouseover', (event) => {
        box.style.backgroundColor = 'purple';
    });

    grid.appendChild(box);
}

