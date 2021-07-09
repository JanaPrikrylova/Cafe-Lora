import './style.css';
import { Layer} from './Layer/index'
console.log('funguju!');

// -------------- Zprovoznění navigace -------------

const btnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

btnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const aElm = document.querySelectorAll('a');

const navigation = () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
};

for (let i = 0; i < aElm.length; i++) {
  aElm[i].addEventListener('click', navigation);
}

// ------------- Objednávání -----------------

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
let ordered = false;

const order = () => {
  if (ordered === true) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.toggle = 'drink__cup--selected';
    ordered = false;
  } else {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.toggle = 'drink__cup--selected';
    ordered = true;
  }
};

orderBtnElm.addEventListener('click', order);

// ------------ Komponenta Layer ------------------

const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
