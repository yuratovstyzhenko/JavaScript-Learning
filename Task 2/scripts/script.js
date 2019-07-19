  'use strict';

  let money = +prompt("Ваш бюджет на месяц ?");
  let time = prompt("Введите дату в формате YYYY-MM-DD");

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

  let num = 0;

  // Example 2
  // while (num < 2) {
  //   let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце",""),
  //     secondQuestion = prompt("Во сколько обойдется?","");

  //   if ( (typeof(firstQuestion)) === "string" 
  //       && (typeof(firstQuestion)) != null 
  //       && firstQuestion != "" && firstQuestion.length < 50 
  //       && (typeof(secondQuestion)) === "string" 
  //       && (typeof(secondQuestion)) != null 
  //       && secondQuestion != "" && secondQuestion.length < 50) {

  //         appData.expenses[firstQuestion] = secondQuestion;

  //   } else {
  //     alert("Error. Try again !");
  //     num--;
  //   }
  //   num++;
  // }

  // Example 3
  // do {
  //   let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце",""),
  //     secondQuestion = prompt("Во сколько обойдется?","");

  //   if ( (typeof(firstQuestion)) === "string" 
  //       && (typeof(firstQuestion)) != null 
  //       && firstQuestion != "" && firstQuestion.length < 50 
  //       && (typeof(secondQuestion)) === "string" 
  //       && (typeof(secondQuestion)) != null 
  //       && secondQuestion != "" && secondQuestion.length < 50) {

  //         appData.expenses[firstQuestion] = secondQuestion;

  //   } else {
  //     alert("Error. Try again !");
  //     num--;
  //   }
  //   num++;
  // } while (num < 2);

  appData.moneyPerDay = appData.budjet / 30;
  alert(appData.moneyPerDay);
