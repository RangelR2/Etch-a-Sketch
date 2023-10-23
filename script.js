const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);

const pageTitle = document.createElement('h1'); 
pageTitle.classList.add('pageTitle');
pageTitle.textContent = 'Etch-a-Sketch Project';
content.appendChild(pageTitle);
pageTitle.setAttribute('style','margin: 1%;  margin-left: 15%; margin-right: 15%;padding: 1%; color: white; font-family: "Roboto", sans-serif; border: 2px solid black; display: flex; height: 100%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

const pageCanvas = document.createElement('div');
pageCanvas.classList.add('pageCanvas');
content.appendChild(pageCanvas);
pageCanvas.setAttribute('style','display: flex; margin: 1%; margin-left: 15%; margin-right: 15%; height: 83vh; border: 2px solid yellow; display: flex;');

const buttonsDiv = document.createElement('buttonsDiv');
buttonsDiv.classList.add('div');
pageCanvas.appendChild(buttonsDiv);
buttonsDiv.setAttribute('style', 'margin: 1%; padding-right: 15%; font-family: "Roboto", sans-serif; border: 2px solid black;height: 97%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: center;');

// ('style', 'font-family: "Roboto", sans-serif; border: 2px solid black; display: flex;
// height: 100%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

const CanvasDiv = document.createElement('div');
CanvasDiv.classList.add('CanvasDiv');
pageCanvas.appendChild(CanvasDiv);
CanvasDiv.setAttribute('style','padding-right: 71%; margin: 1%; height: 97%; border: 2px solid blue;');



const resetButton = document.createElement('resetButton');
resetButton.classList.add('button');
resetButton.textContent = 'Start!';
buttonsDiv.appendChild(resetButton);
resetButton.setAttribute('style', 'font-family: "Roboto", sans-serif; background-color: white; padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: center');
