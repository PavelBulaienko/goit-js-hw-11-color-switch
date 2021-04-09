import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  documentBody: document.querySelector('body'),
};

let colourInterval = null;
let currentColorIndex = 0;

refs.startBtn.addEventListener('click', startCalbc);

refs.stopBtn.addEventListener('click', stopCalbc);

//func

function startCalbc() {
  refs.startBtn.disabled = true;
  colourInterval = setInterval(changeColour, 1000);
}

function changeColour() {
  currentColorIndex = randomIntegerFromInterval(0, colors.length);
  refs.documentBody.style.backgroundColor = colors[currentColorIndex];
}

function stopCalbc() {
  clearInterval(colourInterval);
  refs.startBtn.disabled = false;
}
