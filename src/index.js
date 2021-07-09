import './style.css';

console.log('funguju!');

// -------------- Zprovoznění navigace -------------

const btnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

btnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
})

const aElm = document.querySelectorAll('a');

const navigation = () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
}

for (let i = 0; i < aElm.length; i++) {
  aElm[i].addEventListener('click', navigation);
}
