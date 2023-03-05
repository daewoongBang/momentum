const toDoForm = document.getElementById('todo-form');

const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = event => {
  const li = event.target.parentElement;
  const inputEl = li.querySelector('input');

  toDos = toDos.filter(item => item.id.toString() !== inputEl.id);

  saveToDos();

  li.remove();
};

const addToDo = item => {
  const spanEl = document.createElement('span');

  const li = document.createElement('li');

  const label = document.createElement('label');
  label.htmlFor = item.id;
  label.innerText = item.text;

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = item.id;
  checkBox.name = 'todo';

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '✘';
  deleteButton.addEventListener('click', deleteToDo);

  spanEl.appendChild(checkBox);
  spanEl.appendChild(label);

  li.appendChild(spanEl);
  li.appendChild(deleteButton);

  toDos.push(item);

  toDoList.appendChild(li);
};

const initToDos = () => {
  const todos = localStorage.getItem(TODOS_KEY);

  switch (!!todos) {
    case true:
      const parsedTodos = JSON.parse(todos);

      parsedTodos.forEach(addToDo);
      break;
  }
};

const handleToDoSubmit = event => {
  event.preventDefault();

  const input = toDoForm.querySelector('input');

  const todoObject = {
    text: input.value,
    id: Date.now()
  };

  addToDo(todoObject);

  saveToDos();

  input.value = '';
};

toDoForm.addEventListener('submit', handleToDoSubmit);

initToDos();
