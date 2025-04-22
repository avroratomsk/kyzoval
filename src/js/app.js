import * as functions from './modules/baseFunctions.js';

functions.isWebp();

// new VenoBox({
//   selector: '.my-image-links',
//   numeration: true,
//   infinigall: true,
//   share: true,
//   spinner: 'rotating-plane'
// });

const navItemElem = document.querySelectorAll('.nav__item');

const openSubMenu = (e) => {
  const submenu =  e.currentTarget.querySelector(".submenu");

  submenu.classList.toggle('active');
}

navItemElem?.forEach(item => {
  item.addEventListener('click', openSubMenu)
});

const burgerBtn = document.querySelector(".burger");

burgerBtn?.addEventListener('click', () => {
  document.querySelector(".nav").classList.add('active');
})

const closeBtn = document.querySelector(".close");

closeBtn?.addEventListener('click', () => {
  document.querySelector(".nav").classList.remove('active');
})