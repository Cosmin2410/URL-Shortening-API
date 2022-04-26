// Phone Menu

const phoneMenu = document.querySelector('.nav-links-login');

const btn = document
  .querySelector('.ham-menu')
  .addEventListener('click', () => {
    phoneMenu.classList.toggle('active');
  });

// Input

const urlsRow = document.querySelector('.urls');
const input = document.querySelector('input');
const err = document.querySelector('.err');

const inputBtn = document
  .querySelector('.text-btn')
  .addEventListener('click', () => {
    const inputText = document.querySelector('input').value;

    if (inputText === '') {
      input.style.border = '1px solid red';
      err.style.display = 'block';
    } else {
      input.style.border = 'none';
      err.style.display = 'none';
    }

    const shortURL = async () => {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputText}`
      );
      const data = await response.json();
      const url = data.result.short_link3;

      urlsRow.innerHTML += ` <div class="url-row">
          <p> ${inputText} </p>  
          <input type="text" class="short-url" value="${url}" readonly>
          </div>`;

      btnLink();
    };

    shortURL();
  });

const btnLink = () => {
  const links = document.querySelectorAll('.short-url');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      let copyText = link.value;
      navigator.clipboard.writeText(copyText);
    });
  });
};
