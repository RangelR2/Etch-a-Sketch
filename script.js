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
pageCanvas.setAttribute('style','margin: 1%; margin-left: 15%; margin-right: 15%; height: 83vh; border: 2px solid yellow; display: flex;');

const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttonsDiv');
pageCanvas.appendChild(buttonsDiv);
buttonsDiv.setAttribute('style','padding: 3%; padding-right: 25%; margin-left: 5%; margin: 1%; width: 4%: height: 83vh; border: 2px solid purple;');

const CanvasDiv = document.createElement('div');
CanvasDiv.classList.add('CanvasDiv');
pageCanvas.appendChild(CanvasDiv);
CanvasDiv.setAttribute('style','padding-right: 67%; margin: 1%; width: 550px: height: 83vh; border: 2px solid blue;');