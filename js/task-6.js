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
  const boxesArray = [];

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesArray.push(box);
      boxSize += 10;
      inputEl.value = '';
    }
  }
  boxesEl.append(...boxesArray);
}

function handleCreate() {
  const amount = parseInt(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
btnCreateEl.addEventListener('click', handleCreate);
btnDestroyEl.addEventListener('click', destroyBoxes);
