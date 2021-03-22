const burgerMenu = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

function toggleOpen() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    fadeElems.forEach(function (elem) {
      elem.classList.remove('fade-in');
      elem.classList.add('fade-out');
    });
    body.classList.remove('noscroll');
  } else {
    header.classList.add('open');
    fadeElems.forEach((elem) => {
      elem.classList.remove('fade-out');
      elem.classList.add('fade-in');
    });
    body.classList.add('noscroll');
  }
}

burgerMenu.addEventListener('click', toggleOpen);
