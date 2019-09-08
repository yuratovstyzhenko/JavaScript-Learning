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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
      appData.moneyPerDay = (appData.budjet / 30).toFixed();
      alert("Бюджет на один день составляет: " + appData.moneyPerDay + " грн.");
    },
    detectLevel: function() {
      if (appData.moneyPerDay < 100) {
        console.log("Низкаий уровень достатка");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
          console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
          } else {
              console.log("Произошла ошибка !");
            }   
    },
    checkSevings: function() {
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений ?"),
            persent = +prompt("Под какой процент ?");      
        appData.monthIncome = save/100/12*persent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
      }
    },
    chooseOptExpenses: function() {
      for (let i = 0; i < 3; i++) {
        let answer = prompt("Статья необязательных расходов ?");
        appData.optionalExpenses[i + 1] = answer;
      }
    },
    chooseIncome: function() {
      let items = prompt("Что принесет дополнительный доход ? (Перечислите через запятую)", "");
      if (items == null || items == "" || typeof(items) != "string") {
        alert("Ошибка ! Попробуйте снова");
        appData.chooseIncome();
      }
      appData.income = items.split(", ");
      appData.income.push(prompt("Что-то ещё ?", ""));
      appData.income.sort();
      appData.income.forEach(function(item, i){
        alert("Способы доп. заработка: " + (i+1) + ": " + item);
      });

      for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
      }
    },
  };