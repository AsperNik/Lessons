'use strict';

let money = 'Ваш бюджет на месяц',
    time = 'Введите дату в формате YYYY-MM-DD';

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpanses:{},
    income:{},
    savings: false
}

let mandExpenses = 'Введите обязательную статью расходов в этом месяце',
    howMuch = 'Во сколько обойдется?';

appData.expenses[mandExpenses] = howMuch;

    mandExpenses = 'Введите обязательную статью расходов в этом месяце';
    howMuch = 'Во сколько обойдется?';

appData.expenses[mandExpenses] = howMuch;

console.log(appData);