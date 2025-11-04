let grid = document.querySelector('.squares-container');

let userInput = 16;

/* ---- CREATE BUTTONS ---- */
const button1 = document.createElement('button');
const button2 = document.createElement('button');
button1.textContent = 'SQUARES';
button1.style.width = '100px';
button1.style.height = '50px';
button2.textContent = 'RESET';
button2.style.width = '100px';
button2.style.height = '50px';

 /* ---- BUTTONS CONTAINER ---- */
let buttonsContainer = document.createElement('button-container');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.gap = '10px';
buttonsContainer.appendChild(button1);
buttonsContainer.appendChild(button2);
buttonsContainer.style.marginBottom = '10px';

grid.before(buttonsContainer);


function buildGrid(size) {
    grid.innerHTML = '';
    const containerWidth = grid.clientWidth;
    const boxSize = Math.floor(containerWidth / size);

    for (let i = 0; i < userInput * userInput; i++) {
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
}

buildGrid(userInput);   // Build initial grid


/* ---- SET NUMBER OF SQUARES AND CHECK FOR VALID USER INPUT ---- */
button1.addEventListener('click', () => {
    let input = prompt('How many squares would you like to use?');
    input = Number(input);

    if (!Number.isInteger(input)) {
        alert('Please enter a valid number between 1 and 100');
        return;
    }

    if (input < 1 || input > 100) {
        alert('Please enter a valid number between 1 and 100');
        return;
    }

    userInput = input;
    buildGrid(userInput);
});

/* ---- RESET SQUARE COLORS ---- */
button2.addEventListener('click', () => {
    const boxes = grid.querySelectorAll('div');
    boxes.forEach(box => box.style.backgroundColor = '');
});



