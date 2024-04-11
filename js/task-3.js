const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

const onFormInput = event => {
  const name = event.currentTarget.value.trim();
  nameOutput.textContent = name || 'Anonymous';
};

nameInput.addEventListener('input', onFormInput);
