function fillBoard(size){
let board = document.querySelector(".canvasDiv");
let squares = board.querySelector('div')
squares.forEach((div => div.remove()));
board.style.gridTemplateColumns = `repeat(${size} 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size * size;
for(let i = 0; i < amount; i++){
    let square = document.createElement('div');
    square.setAttribute('style','background-color: white;');
    board.insertAdjacentElement("beforeend", square);
    console.log("???222")
}
}

fillBoard(16);

function changeSize(input){
    if(input <= 100 || input > 1){
        fillBoard(input);
        console.log("???")
    } else{
        alert("mt quadrado")
    }
}