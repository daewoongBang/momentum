const dDayBox = document.querySelector('.dday-box');
const todoBox = document.querySelector('.todo-box');

const showDDay = document.querySelector('#showDDay');
const showTodo = document.querySelector('#showTodo');

const gear = document.querySelector('.fa-gear');

const handleShowDDay = event => {
  dDayBox.classList.toggle('hidden');
};

const handleShowTodo = event => {
  todoBox.classList.toggle('hidden');
};

const handleShowConfig = () => {
  const customize = document.querySelector('#customize');
  customize.classList.toggle('hidden');
};

showDDay.addEventListener('change', handleShowDDay);
showTodo.addEventListener('change', handleShowTodo);

gear.addEventListener('click', handleShowConfig);
