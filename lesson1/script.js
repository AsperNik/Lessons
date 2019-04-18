function main(){
'use strict';

let money = prompt('Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpanses:{},
    income:{},
    savings: false
};

let mandExpenses = prompt('Введите обязательную статью расходов в этом месяце'),
    howMuch = prompt('Во сколько обойдется?');

appData.expenses[mandExpenses] = howMuch;

    mandExpenses = prompt('Введите обязательную статью расходов в этом месяце');
    howMuch = prompt('Во сколько обойдется?');

appData.expenses[mandExpenses] = howMuch;

let budget_one_day = +money/30;

alert('Бюджет на 1 день = ' + budget_one_day.toFixed(2));
}