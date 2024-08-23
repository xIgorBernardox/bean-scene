const menuButton = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.main-navigation__list');
const menuIcon = menuButton.querySelector('i');

menuButton.addEventListener('click', function() {
  navList.classList.toggle('active');
  
  // Alterna o ícone entre hamburguer e X
  if (navList.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});