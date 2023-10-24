const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);
container.setAttribute('style','')

const pageTitle = document.createElement('h1'); 
pageTitle.classList.add('pageTitle');
pageTitle.textContent = 'Etch-a-Sketch Project';
content.appendChild(pageTitle);
pageTitle.setAttribute('style','box-shadow: -6px 6px 1px black; background-color: rgb(40,40,40); margin: 1%;  margin-left: 15%; margin-right: 15%;padding: 1%; color: white; font-family: "Roboto", sans-serif; border: 2px solid black; display: flex; height: 100%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

const pageCanvas = document.createElement('div');
pageCanvas.classList.add('pageCanvas');
content.appendChild(pageCanvas);
pageCanvas.setAttribute('style','box-shadow: -6px 6px 1px black; background-color: rgb(40,40,40); display: flex; margin: 1%; margin-left: 15%; text-align:center; margin-right: 15%; height: 83vh; border: 2px solid black; display: flex;');

const buttonsDiv = document.createElement('buttonsDiv');
buttonsDiv.classList.add('div');
pageCanvas.appendChild(buttonsDiv);
buttonsDiv.setAttribute('style', 'width: 15%; display: block; background-color: rgb(90,90,90); box-shadow: -2px 2px 1px black; margin: 1%; border: 2px solid black;text-align:center; padding: 5%;');

// ('style', 'font-family: "Roboto", sans-serif; border: 2px solid black; display: flex;
// height: 100%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

const canvasDiv = document.createElement('div');
canvasDiv.classList.add('canvasDiv');
pageCanvas.appendChild(canvasDiv);
canvasDiv.setAttribute('style','display: grid; grid-gap: 10px; grid-template-columns: repeat(3, minamax(0, 1fr)); width: 100%; background-color: rgb(90,90,90); display:flex; box-shadow: -2px 2px 1px black; margin: 1%; margin: 1%; height: 97%; border: 2px solid black;');

const resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
buttonsDiv.appendChild(resetButton);
resetButton.setAttribute('style','margin-top: 300%; background-color: rgb(240,240,240); cursor: pointer; padding: 12px 25px 12px 25px; font-size: 18px; box-shadow: -4px 4px 1px black; border: 1px solid black')
resetButton.textContent = 'Reset';


resetButton.addEventListener('mouseover', () => {
    resetButton.setAttribute('style','margin-top: 300%; background-color: purple; cursor: pointer; padding: 12px 25px 12px 25px; font-size: 18px; box-shadow: -4px 4px 1px black; border: 1px solid black')
});

resetButton.addEventListener('mouseout', () => {
    resetButton.setAttribute('style','margin-top: 300%; background-color: rgb(240,240,240); cursor: pointer; padding: 12px 25px 12px 25px; font-size: 18px; box-shadow: -4px 4px 1px black; border: 1px solid black')
});

let grid = document.getElementById("canvasDiv");
let cell = document.createElement("div");
cell.innerHTML = "aoba";
canvasDiv.appendChild(cell);
cell.setAttribute('style','border:1px solid purple; background: white; padding: 10px;')