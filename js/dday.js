const dDayForm = document.getElementById('dday-form');
const dDayList = document.getElementById('dday-list');

const dDayTitle = dDayForm.querySelector('.dday-title');
const targetDDay = dDayForm.querySelector('.dday-date');

const DDAYS_KEY = 'dday';

let dDays = [];

const getDiff = date => {
  const now = new Date();
  const christmas = new Date(date);

  const diff = christmas - now;
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));

  return diffDay;
};

const saveDDays = () => {
  localStorage.setItem(DDAYS_KEY, JSON.stringify(dDays));
};

const deleteDDay = event => {
  const li = event.target.parentElement;

  dDays = dDays.filter(item => item.id.toString() !== li.id);

  saveDDays();

  li.remove();
};

const addDDay = item => {
  const divEl = document.createElement('div');

  const li = document.createElement('li');
  li.id = item.id;

  const ddayEl = document.createElement('span');
  ddayEl.innerHTML = `${getDiff(item.dDay)}D`;

  const ddayTitleEl = document.createElement('span');
  ddayTitleEl.innerHTML = item.title;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '✘';
  deleteButton.addEventListener('click', deleteDDay);

  divEl.appendChild(ddayEl);
  divEl.appendChild(ddayTitleEl);

  li.appendChild(divEl);
  li.appendChild(deleteButton);

  dDays.push(item);

  dDayList.appendChild(li);
};

const initToday = () => {
  dDayTitle.value = '';

  const now = new Date();

  targetDDay.value = `${now.getFullYear()}-${setNumberFormat(
    now.getMonth() + 1
  )}-${setNumberFormat(now.getDate())}`;
};

const handleDDaySubmit = event => {
  event.preventDefault();

  const title = dDayTitle.value;
  const dDay = targetDDay.value;

  if (getDiff(dDay) < 0) return;

  const dDayObject = {
    id: Date.now(),
    title,
    dDay
  };

  addDDay(dDayObject);

  saveDDays();

  initToday();
};

dDayForm.addEventListener('submit', handleDDaySubmit);

const initDDayList = () => {
  const ddays = localStorage.getItem(DDAYS_KEY);

  switch (!!ddays) {
    case true:
      const parsedDDays = JSON.parse(ddays);

      parsedDDays.forEach(addDDay);
      break;
  }
};

initToday();

initDDayList();
