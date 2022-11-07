import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let data = {};
const loadForm = () => {
  try {
    let formLoad = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!formLoad) {
      return;
    }
    data = formLoad;
    feedBackForm.email.value = data.email;
    feedBackForm.message.value = data.message;
  } catch (error) {
    console.error(error.message);
  }
};

const onSaveFormInput = event => {
  data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  data[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const onFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  console.log(data);
  localStorage.removeItem(STORAGE_KEY);
};

loadForm();

feedBackForm.addEventListener('input', throttle(onSaveFormInput, 500));
feedBackForm.addEventListener('submit', onFormSubmit);
