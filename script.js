// Header menu toggle
const toggle = document.querySelector('.menu__button');
const toggleMenu = document.querySelector('.menu__list');

toggle.addEventListener('click', function () {
  toggleMenu.classList.toggle('active');
  toggle.classList.toggle('active');
});

toggleMenu.addEventListener('click', function () {
  toggle.classList.toggle('active');
  toggleMenu.classList.toggle('active');
});

// Portfolio item
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Scroll to top button
const scrollToTopButton = document.querySelector('.button__to__top');

const handleScroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};

document.addEventListener('scroll', handleScroll);

// dark mode switcher
const themeButton = document.querySelector('.daynight__button');
const themeCurrent = localStorage.getItem('theme');

if (themeCurrent == 'dark') {
  document.body.classList.add('dark');
  themeButton.classList.add('night');
}

themeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  themeButton.classList.remove('night');

  let theme = '';

  if (document.body.classList.contains('dark')) {
    themeButton.classList.add('night');
    theme = 'dark';
  }

  localStorage.setItem('theme', theme);
});

// Highlight code
hljs.highlightAll();
