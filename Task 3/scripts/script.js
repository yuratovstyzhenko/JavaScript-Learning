  'use strict';

  let money, time;

  function start() {
    money = +prompt("Ваш бюджет на месяц ?");

    while ( (isNaN(money)) || money == null || money == "") {
      money = +prompt("Ваш бюджет на месяц ?");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD");
  }
  start();

  let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
  };

  function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
      let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце",""),
        secondQuestion = prompt("Во сколько обойдется?","");
  
      if ( (typeof(firstQuestion)) === "string" 
          && (typeof(firstQuestion)) != null 
          && firstQuestion != "" && firstQuestion.length < 50 
          && (typeof(secondQuestion)) === "string" 
          && (typeof(secondQuestion)) != null 
          && secondQuestion != "" && secondQuestion.length < 50) {
  
            appData.expenses[firstQuestion] = secondQuestion;
  
      } else {
        alert("Error. Try again !");
        i--;
      }
    }
  }
  chooseExpenses();

  function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert("Бюджет на один день составляет: " + appData.moneyPerDay + " грн.");
  } 
  detectDayBudget();

  function detectLevel() {
    if (appData.moneyPerDay < 100) {
      console.log("Низкаий уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
      } else if (appData.moneyPerDay > 2000) {
          console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка !");
          }
  }
  detectLevel();

  function checkSevings() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений ?"),
          persent = +prompt("Под какой процент ?");      
      appData.monthIncome = save/100/12*persent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  }
  checkSevings();

  function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
      let answer = prompt("Статья необязательных расходов ?");
      appData.optionalExpenses[i + 1] = answer;
    }
  }
  chooseOptExpenses();