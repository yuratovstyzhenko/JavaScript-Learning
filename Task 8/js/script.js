let startCounting = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');

let firstExpensesButtons = document.getElementsByTagName('button')[0];
let secondExpensesButtons = document.getElementsByTagName('button')[1];
let thirdExpensesButtons = document.getElementsByTagName('button')[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income');
let checkbox = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;

firstExpensesButtons.disabled = true;
secondExpensesButtons.disabled = true;
thirdExpensesButtons.disabled = true;


startCounting.addEventListener('click', function(){
    firstExpensesButtons.disabled = false;
    secondExpensesButtons.disabled = false;
    thirdExpensesButtons.disabled = false;

    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц ?");

    while ( (isNaN(money)) || money == null || money == "") {
      money = +prompt("Ваш бюджет на месяц ?");
    }
    appData.budjet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

firstExpensesButtons.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let firstQuestion = expensesItem[i].value,
            secondQuestion = expensesItem[++i].value;
    
        if ( (typeof(firstQuestion)) === "string" 
            && (typeof(firstQuestion)) != null 
            && firstQuestion != "" && firstQuestion.length < 50 
            && (typeof(secondQuestion)) === "string" 
            && (typeof(secondQuestion)) != null 
            && secondQuestion != "" && secondQuestion.length < 50) {
    
              appData.expenses[firstQuestion] = secondQuestion;
              sum += +secondQuestion;

              expensesValue.textContent = sum;
    
        } else {
          alert("Error. Try again !");
          i--;
        }
      }
});

secondExpensesButtons.addEventListener('click', function(){
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
      }
});

thirdExpensesButtons.addEventListener('click', function(){
    if (appData.budjet != undefined) {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += +appData.expenses[key];
        }
        appData.moneyPerDay = ((+appData.budjet - sum) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Низкаий уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка !";
                }
    } else {
        daybudgetValue.textContent = "Произошла ошибка !";
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true) {
        let save = chooseSum.value,
            persent = choosePercent.value;    

        appData.monthIncome = save/100/12*persent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);

        appData.yearIncome = save/100*persent;
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if (appData.savings == true) {
        let save = chooseSum.value,
            persent = choosePercent.value;      
        appData.monthIncome = save/100/12*persent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);

        appData.yearIncome = save/100*persent;
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

  let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };