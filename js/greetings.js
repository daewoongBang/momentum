const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');
const todoArea = document.querySelector('#todo-area');
const configArea = document.querySelector('.config-area');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const initGreeting = username => {
  greeting.innerHTML = `All is well ${username}!`;

  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoArea.classList.remove(HIDDEN_CLASSNAME);
  configArea.classList.remove(HIDDEN_CLASSNAME);
};

const onLoginSubmit = event => {
  event.preventDefault();

  const username = loginInput.value;

  if (!username) {
    loginInput.classList.add('validation-name');

    return;
  } else {
    loginInput.classList.remove('validation-name');
  }

  loginForm.classList.add(HIDDEN_CLASSNAME);

  initGreeting(username);

  localStorage.setItem(USERNAME_KEY, username);
};

const localStorageUsername = localStorage.getItem(USERNAME_KEY);

if (localStorageUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  initGreeting(localStorageUsername);
}
