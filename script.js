// script.js - Обновленные скрипты для TravelVibe

// Активация навигации
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  });
});

// Кнопка Continue
const continueBtn = document.querySelector('.btn--continue');
if (continueBtn) {
  continueBtn.addEventListener('click', () => {
    alert('🂨 Спасибо за интерес! \n\nВскоре мы откроем регистрацию и каталог туров!');
  });
}

// Интерактивность для пунктов туров
const tourItems = document.querySelectorAll('.tours-list li');

tourItems.forEach(item => {
  item.addEventListener('click', () => {
    const text = item.textContent;
    alert(`💫 Вы выбрали: ${text}\n\nХотите узнать больше? Напишите нам!`);
  });
});

// Плавная анимация на скролл
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(15, 23, 42, 0.95)';
  } else {
    header.style.background = 'rgba(15, 23, 42, 0.6)';
  }
});

console.log('🂨 TravelVibe - Туристическое агентство готово к работе!');
