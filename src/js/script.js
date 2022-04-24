const phoneMenu = document.querySelector('.nav-links-login');

const btn = document
  .querySelector('.ham-menu')
  .addEventListener('click', () => {
    phoneMenu.classList.toggle('active');
  });
