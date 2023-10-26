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
            square.setAttribute('style', 'background-color: black;');
        });
        square.setAttribute('style', 'background-color: white;');
        board.insertAdjacentElement("beforeend", square);

        const blackButton = document.querySelector('#blackButton');
        blackButton.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
                square.setAttribute('style', 'background-color: black;');
            });


        });
        const greyButton = document.querySelector('#greyButton');
        greyButton.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
                square.setAttribute('style', 'background-color: grey;');
            });
        });
        const whiteButton = document.querySelector('#whiteButton');
        whiteButton.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
                square.setAttribute('style', 'background-color: white;');
            });
        });
        resetButton.addEventListener('click', () => {
            square.setAttribute('style', 'background: white;');
            console.log('teste');
        });
        const randomButton = document.querySelector('#randomButton');
        randomButton.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            });
        });
    }
}



//Botão de Tamanho
const sizeButton = document.querySelector('#setSize');
sizeButton.addEventListener('mouseover', () => {
    sizeButton.setAttribute('style', 'background-color: rgb(180,180,180); cursor: pointer;');
});

sizeButton.addEventListener('mouseout', () => {
    sizeButton.setAttribute('style', 'background-color: white;');
});

//Botão Preto
const blackButton = document.querySelector('#blackButton');
blackButton.addEventListener('mouseover', () => {
    blackButton.setAttribute('style', 'background-color: rgb(180,180,180); cursor: pointer;');
});

blackButton.addEventListener('mouseout', () => {
    blackButton.setAttribute('style', 'background-color: white;');
});

//Botão Cinza
const greyButton = document.querySelector('#greyButton');
greyButton.addEventListener('mouseover', () => {
    greyButton.setAttribute('style', 'background-color: rgb(180,180,180); cursor: pointer;');
});

greyButton.addEventListener('mouseout', () => {
    greyButton.setAttribute('style', 'background-color: white;');
});

//Botão Branco
const whiteButton = document.querySelector('#whiteButton');
whiteButton.addEventListener('mouseover', () => {
    whiteButton.setAttribute('style', 'background-color: rgb(180,180,180); cursor: pointer;');
});

whiteButton.addEventListener('mouseout', () => {
    whiteButton.setAttribute('style', 'background-color: white;');
});

//Botão Random
const randomButton = document.querySelector('#randomButton');
randomButton.addEventListener('mouseover', () => {
    randomButton.setAttribute('style', 'background-color: rgb(180,180,180); cursor: pointer;');
});

randomButton.addEventListener('mouseout', () => {
    randomButton.setAttribute('style', 'background-color: white;');
});

//Botão Reset
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('mouseover', () => {
    resetButton.setAttribute('style', 'background-color: rgb(180,180,180); cursor: pointer;');
});

resetButton.addEventListener('mouseout', () => {
    resetButton.setAttribute('style', 'background-color: white;');
});

fillBoard(16);

function changeSize(input) {
    if (input <= 100 || input > 1) {
        fillBoard(input);
    } else {
        alert("mt quadrado");
        console.log('grande ein');
    }
}

