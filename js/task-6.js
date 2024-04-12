function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector('#controls');
const inputEl = divEl.firstElementChild;
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let boxSize = 30;
  boxesEl.innerHTML = '';

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(box);
    boxSize += 10;
  }
}

function handleCreate() {
  const amount = parseInt(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  }
}

function handleDestroy() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

btnCreateEl.addEventListener('click', handleCreate);
btnDestroyEl.addEventListener('click', handleDestroy);
