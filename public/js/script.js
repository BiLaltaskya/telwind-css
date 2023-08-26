const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');
const body = document.querySelector('body');

sunIcon.addEventListener('click', () => {
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
  body.classList.remove('dark');
});

moonIcon.addEventListener('click', () => {
  moonIcon.classList.add('hidden');
  sunIcon.classList.remove('hidden');
  body.classList.add('dark');
});


const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});