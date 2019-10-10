'use strict';

let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let li = document.createElement('li');

let columns = document.querySelectorAll('.column');
let advertising = document.querySelector('div.adv');

let headline = document.querySelector('#title');

let opinion = document.querySelector('#prompt');
let question = prompt('Каково ваше отношение к технике apple ?','');

// Добавляем новый li, с классом и текстом
li.classList.add('menu-item');
menu.appendChild(li);
li.textContent = "Пятый пункт";

// Поменяли местами два элемента
menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(menuItem[1], menuItem[3]);

// Меняем фон
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// Удалить рекламу со страницы. Можно так же использовать advertising.remove();
columns[1].removeChild(advertising);

// Заменить текст
headline.textContent = 'Мы продаем только подлинную технику Apple';

// Отношение к технике Apple
opinion.textContent = question;
