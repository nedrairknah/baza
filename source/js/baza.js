"use strict"

var menu = document.querySelector('.nav__wrap');
var button = document.querySelector('.header__toggle');
button.addEventListener('click', function toggleMenu() {
  if (menu.classList.contains('nav__wrap--closed')) {
    menu.classList.remove('nav__wrap--closed');
  }
});


// не закрывается меню
var menu = document.querySelector('.nav__wrap');
var button = document.querySelector('.nav__cross-button');
button.addEventListener('click', function toggleMenu() {
  if (menu.classList.contains('nav__wrap')) {
    menu.classList.add('nav__wrap--closed');
  }
});
