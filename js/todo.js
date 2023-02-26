const toDoForm = document.getElementById('todo-form');

const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = event => {
  const li = event.target.parentElement;

  toDos = toDos.filter(item => item.id.toString() !== li.id);

  saveToDos();

  li.remove();
};

const addToDo = item => {
  const li = document.createElement('li');
  li.id = item.id;

  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  deleteButton.innerText = '❌';
  deleteButton.addEventListener('click', deleteToDo);

  span.innerText = item.text;

  toDos.push(item);

  li.appendChild(span);
  li.appendChild(deleteButton);

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
