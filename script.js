function fillBoard(size) {
    let board = document.querySelector(".canvasDiv");
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', 'background-color: rgb(255, 0, 127);');
        });
        square.setAttribute('style', 'background-color: pink;');
        board.insertAdjacentElement("beforeend", square);

        const blackButton = document.querySelector('#blackButton');
        blackButton.addEventListener('click', () => {
            console.log('teste');
            square.setAttribute('style', 'background-color: black;');
        });

    }
}

fillBoard(16);

function changeSize(input) {
    if (input <= 100 || input > 1) {
        fillBoard(input);
    } else {
        alert("mt quadrado");
    }
}

const sizeButton = document.querySelector('#setSize');
sizeButton.addEventListener('mouseover', () => {
    sizeButton.setAttribute('style', 'background-color: rgb(180,180,180); cursor: pointer;');
});

sizeButton.addEventListener('mouseout', () => {
    sizeButton.setAttribute('style', 'background-color: white;');
});

