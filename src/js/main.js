let burger = document.querySelector('.burger');
let list = document.querySelector('.header__list');
let contact = document.querySelector('.header__contact');
let lang = document.querySelector('.header__lang');

 let burger = $('.burger');
 let list = $('.header__list');
 let icon = $('.header__contact');
 burger.on('click', function (e) {
     burger.toggleClass('active');
     list.toggleClass('active');
     icon.toggleCl};