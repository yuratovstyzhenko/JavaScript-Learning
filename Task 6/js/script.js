let startCounting = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value');
let daybudgetValue = document.getElementsByClassName('daybudget-value');
let levelValue = document.getElementsByClassName('level-value');
let expensesValue = document.getElementsByClassName('expenses-value');
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value');
let incomeValue = document.getElementsByClassName('income-value');
let monthsavingsValue = document.getElementsByClassName('monthsavings-value');
let yearsavingsValue = document.getElementsByClassName('yearsavings-value');

let expensesItem = document.getElementsByClassName('expenses-item');

let expensesButtons = document.getElementsByTagName('button');
let firstButton = expensesButtons[0];
let secondButton = expensesButtons[1];
let thirdButton = expensesButtons[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income');
let checkbox = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');