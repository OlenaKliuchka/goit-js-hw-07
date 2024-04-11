const formEl = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();

  const infoEl = event.currentTarget.elements;

  if (infoEl.email.value === '' || infoEl.password.value === '') {
    return alert('All form fields must be filled in');
  }
  const formData = {
    email: infoEl.email.value,
    password: infoEl.password.value.trim(),
  };

  console.log(formData);
  event.currentTarget.reset();
};

formEl.addEventListener('submit', handleSubmit);
