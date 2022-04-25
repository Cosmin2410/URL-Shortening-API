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

      urlsRow.innerHTML += ` <div> <p> ${inputText} </p>   <p> ${url} </p> 
      
      <button> Copy Link <button>
      </div>  `;
    };
    shortURL();
  });
