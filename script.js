// script.js — интерактивность для задания №6

// Переключение темы (светлая / тёмная)
const themeToggleBtn = document.querySelector('#themeToggle');
const body = document.body;

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggleBtn.textContent = body.classList.contains('light-theme')
      ? 'Переключить на тёмную тему'
      : 'Переключить тему';
  });
}

// Показ / скрытие плана обучения
const togglePlanBtn = document.querySelector('#togglePlan');
const learningList = document.querySelector('#learningList');

if (togglePlanBtn && learningList) {
  togglePlanBtn.addEventListener('click', () => {
    const isHidden = learningList.classList.toggle('hidden');
    togglePlanBtn.textContent = isHidden ? 'Показать план' : 'Скрыть план';
  });
}

// Счётчик кликов
const incrementBtn = document.querySelector('#incrementBtn');
const clickCountSpan = document.querySelector('#clickCount');

let clickCount = 0;

if (incrementBtn && clickCountSpan) {
  incrementBtn.addEventListener('click', () => {
    clickCount += 1;
    clickCountSpan.textContent = String(clickCount);
  });
}

// Изменение текста сообщения
const changeTextBtn = document.querySelector('#changeTextBtn');
const messageText = document.querySelector('#messageText');

if (changeTextBtn && messageText) {
  changeTextBtn.addEventListener('click', () => {
    messageText.textContent =
      'Текст был изменён с помощью JavaScript по клику на кнопку.';
    messageText.classList.add('highlighted');
  });
}
