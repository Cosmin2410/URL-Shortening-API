const phoneMenu = document.querySelector('.nav-links-login');

const btn = document
  .querySelector('.ham-menu')
  .addEventListener('click', () => {
    phoneMenu.classList.toggle('active');
  });

const shortURL = async () => {
  const response = await fetch('https://api.shrtco.de/v2/');
  const data = await response.json();
};
