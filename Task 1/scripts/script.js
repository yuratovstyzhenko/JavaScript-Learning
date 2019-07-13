  'use strict';

  let money = prompt("Ваш бюджет на месяц ?");
  let time = prompt("Введите дату в формате YYYY-MM-DD");

  let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
  let secondQuestion = prompt("Во сколько обойдется?");
  let thirdQuestion = prompt("Введите обязательную статью расходов в этом месяце");
  let fourthQuestion = prompt("Во сколько обойдется?");

  let appData = {
    budjet: money,
    timeData: time,
    expenses: {
     // firstQuestion: secondQuestion,
     // thidQuestion: fourthQuestion,
    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false,
  };
  appData.expenses.firstQuestion = secondQuestion;
  appData.expenses.thirdQuestion = fourthQuestion;

  alert(appData.budjet/30);
